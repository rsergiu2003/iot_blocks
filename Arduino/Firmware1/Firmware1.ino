/*
  A firmware wich executes a special script
  Created on the 2017 Techsylvania Hackathon by Sergiu Rosu & Florin Bobis

 */
 #include <DallasTemperature.h>
#include <Wire.h>
#include <OneWire.h>

/*
 * Define some inputs first
 */


/*
 * THis is the program
 */
//char program[] = "i:0:0;=:1:0;v:2:27;=:3:2;>:1:3:4;=:5:4;o:5:6;";
char program[] = "i:0:0;p:0;v:1:28;>:0:1:2;o:2:0;";

float variables[30];

#define ds18b20 2
OneWire oneWire(ds18b20);
DallasTemperature sensors(&oneWire);

//used to generate strings for debug printing
char logStr[80];

#define OUTPUT0 12

// the setup function runs once when you press reset or power the board
void setup() {
  pinMode(OUTPUT0, OUTPUT);  

  Serial.begin(9600);
  sensors.begin(); 
}

// the loop function runs over and over again forever
void loop() {
 
   sensors.requestTemperatures();
//    float temp = sensors.getTempCByIndex(0);
//    Serial.print("T:"); Serial.println(temp);
  executeProgram();

    delay(100);
    
}

char comvertToNumeric(char str[]) {
  return 0;
}

  char index = 0;
  //the current character in the program
  char current = program[0];
  //the current instructio
  char instruction = '#';
  //valid instructions
  String instructions = String("iv=o+>");
  //numeric strinv
  String numeric = String("0123456789");
  //the current parameter string
  String parameter = String("");
  //the current parameter index
  int currentParameterIndex = 0;
  //list with all the parameters values
  char allParameters[3];

//will try to execute the program specified in the variable;
void executeProgram () {
//   Serial.println("executing...");
  //index in the program string
   index = 0;
  //the current character in the program
   current = program[0];
  //the current instructio
   instruction = '#';
  //valid instructions
  instructions = String("piv=o+>");
  //numeric strinv
  numeric = String("0123456789");
  //the current parameter string
   parameter = String("");
  //the current parameter index
   currentParameterIndex = 0;


  while (current != '\0') {
   //check if it's an instruction
   if(instructions.indexOf(current)>=0) {
//    sprintf(logStr,"instruction found: %c",current);
//    Serial.println(logStr);
    instruction = current;
   }

  //check if is a numeric value and add it to the parameters string
   if(numeric.indexOf(current)>=0) {
     parameter.concat(current);
   }
   //check if it's a parameter separator
   if(current == ':' || current == ';') {
      if(parameter.length() > 0) {
        allParameters[currentParameterIndex] = parameter.toInt();
        parameter = String("");

//        sprintf(logStr,"parameter found: %d at index %d",allParameters[currentParameterIndex],currentParameterIndex);
//        Serial.println(logStr);
        
        currentParameterIndex++;
      }

       //we are done with the instruction parsing and it's time to execute
       if(current == ';') {
          executeOpperation(instruction,allParameters[0],allParameters[1],allParameters[2]);
          currentParameterIndex = 0;
       }
   }
   
   index ++;
   current = program[index];
  }
}

void executeOpperation (char opperation, int parameter1,int parameter2, int parameter3) {
//   sprintf(logStr,"instruction %c with parameters: %d,%d,%d",opperation,parameter1,parameter2,parameter3);
//    Serial.println(logStr);
  switch(opperation) {
    case 'i' : 
      input(parameter1, parameter2);
    break;
    case '=' : 
      associateValue(parameter1, parameter2);
    break;
    case '>' : 
      xgty(parameter1, parameter2, parameter3);
    break;
    case 'o' : 
      output(parameter1, parameter2);
    break;
    case 'p' : 
      logValue(parameter1);
    break;
    case 'v' : 
      setVariable(parameter1, parameter2);
    break;
   }
}

/* 
 * Define some Cool functions
 */
 void associateValue (char v1, char v2) {
    variables[v1] = variables[v2];
 }

 void input(char v, char sensor) {
  variables[v] = getInputValue(sensor);
 }

 void output(char v, char output) {
    setOutputValue( variables[v],output);
 }

 void xgty(char v1, char v2, char v3) {
  if(variables[v1]>variables[v2]) {
    variables[v3] = 1;
  } else {
    variables[v3] = 0;
  }
 }

 void logValue(char v) {
  sprintf(logStr,"logging value values[%d] =",v);
  Serial.print(logStr); 
    Serial.println(variables[v]);
 }

 void setVariable(char v, int value) {
  variables[v] = value;
 }

/*
 * will get the input value based on the pin number
 * Those are board specific functions, each board will have specific sensors on specific pins (multiple on same pins on some cases)
 */
float getInputValue (char sensor) {
  //handle sensors

  //0 - first temperature sensor
  if(sensor == 0) {
    return getDS18B20(0);
  }
}

float getDS18B20(char index) {
    sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);
    return temp;
}

/*
 * set an output pin based on the value (this function will decide which kind of output is)
 */
 void setOutputValue(float value, char outputIndex) {
  
  if(outputIndex == 0) {
      digitalWrite(OUTPUT0, value);
  }
 }
