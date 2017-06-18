/*
  A firmware wich executes a special script
  Created on the 2017 Techsylvania Hackathon by Sergiu Rosu & Florin Bobis

 */
 #include <DallasTemperature.h>
#include <Wire.h>
#include <OneWire.h>
#include <TM1638.h>

/*
 * Define some inputs first
 */


/*
 * THis is the program
 */

//demo 1 distance sensor
char program[] = "v:0:100;=1:0;d:2;=3:2;>:1:3:4;=5:4;v:6:30;=7:6;t:5:7;p:3;p:5;p:1;l:2;";

float variables[15];

#define ds18b20 2
OneWire oneWire(ds18b20);
DallasTemperature sensors(&oneWire);

//used to generate strings for debug printing
char logStr[50];

#define OUTPUT0 12
#define OUTPUT1 11

unsigned long timeLastExecution;
TM1638 segmeted_module(4, 5, 3);

#define TONE_PIN A5

#define PING_TRIG 9
#define PING_ECHO 10

// the setup function runs once when you press reset or power the board
void setup() {
  pinMode(OUTPUT0, OUTPUT);  
  pinMode(OUTPUT1, OUTPUT);  

  pinMode(PING_TRIG, OUTPUT); // Sets the trigPin as an Output
  pinMode(PING_ECHO, INPUT); // Sets the echoPin as an Input

  Serial.begin(9600);

//  setupWIFI();
  
  sensors.begin(); 

  timeLastExecution = millis();
}

// the loop function runs over and over again forever
void loop() {
 
//   sensors.requestTemperatures();
//    float temp = sensors.getTempCByIndex(0);
//    Serial.print("T:"); Serial.println(temp);

//    wifiLoop();

   byte keys = segmeted_module.getButtons();

  // light the first 4 red LEDs and the last 4 green LEDs as the buttons are pressed
  segmeted_module.setLEDs(keys);
    
//   delay(100);
  if((millis() - timeLastExecution) > 1000) {
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
  String instructions = String("ptdiv=o+>!");
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
  instructions = String("lptdiv=o+>!");
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
     case 'l' : 
      lcdValue(parameter1);
    break;
    case 'v' : 
      setVariable(parameter1, parameter2);
    break;
    case '!' : 
      invert(parameter1, parameter2);
    break;
     case 't' : 
      playTone(parameter1, parameter2);
    break;
     case 'd' : 
      getDistance(parameter1);
    break;
   }
}
