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
char program[] = "i:0:0;=2:0;v:3:28;=4:3;>:2:4:5;=1:5;p:1;i:0:0;=2:0;v:3:28;=4:3;>:2:4:5;=6:5;o:6:0;                                                                                ";
//char program[] = "i:0:0;p:0;v:1:28;>:0:1:2;o:2:0;v:3:30;>:0:3:4;o:4:1;p:1;";

float variables[15];

#define ds18b20 2
OneWire oneWire(ds18b20);
DallasTemperature sensors(&oneWire);

//used to generate strings for debug printing
char logStr[40];

#define OUTPUT0 12
#define OUTPUT1 11

unsigned long timeLastExecution;

// the setup function runs once when you press reset or power the board
void setup() {
  pinMode(OUTPUT0, OUTPUT);  
  pinMode(OUTPUT1, OUTPUT);  

  Serial.begin(9600);

  setupWIFI();
  
  sensors.begin(); 

  timeLastExecution = millis();
}

// the loop function runs over and over again forever
void loop() {
 
//   sensors.requestTemperatures();
//    float temp = sensors.getTempCByIndex(0);
//    Serial.print("T:"); Serial.println(temp);

    wifiLoop();
    
//   delay(100);
  if((millis() - timeLastExecution) > 2000) {
    executeProgram();
    timeLastExecution = millis();
  }
    
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
  String instructions = String("iv=o+>!");
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
  instructions = String("!piv=o+>");
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
    case '!' : 
      invert(parameter1, parameter2);
    break;
   }
}
