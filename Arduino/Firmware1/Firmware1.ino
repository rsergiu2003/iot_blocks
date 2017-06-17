/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the Uno and
  Leonardo, it is attached to digital pin 13. If you're unsure what
  pin the on-board LED is connected to on your Arduino model, check
  the documentation at http://www.arduino.cc

  This example code is in the public domain.

  modified 8 May 2014
  by Scott Fitzgerald
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
char program[] = "i:0:2;=:1:0;v:2:27;=:3:2;>:1:3:4;=:5:4;o:5:6";
float variables[30];

#define ds18b20 2
OneWire oneWire(ds18b20);
DallasTemperature sensors(&oneWire);

// the setup function runs once when you press reset or power the board
void setup() {

  Serial.begin(9600);
  sensors.begin(); 
}

// the loop function runs over and over again forever
void loop() {
 
   sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);
    Serial.print("T:"); Serial.println(temp);
    delay(1000);
    
}

char comvertToNumeric(char str[]) {
  return 0;
}

//will try to execute the program specified in the variable;
void executeProgram () {
  //index in the program string
  char index = 0;
  //the current character in the program
  char current = program[0];
  //the current instructio
  char instruction = '#';
  //valid instructions
  String instructions = String("i=o+>");
  //the current parameter string
  String parameter = String("");
  //the current parameter index
  char currentParameterIndex = 0;
  //list with all the parameters values
  char allParameters[4];
  while (current != '\0') {
   //check if it's an instruction
   if(instructions.indexOf(current)>=0) {
    
   }

   //check if it's a parameter separator
   if(current == ':') {
      allParameters[currentParameterIndex] = parameter.toInt();
      currentParameterIndex++;
      parameter = String("");
   }

    //we are done with the instruction parsing and it's time to execute
   if(current == ';') {
    
   }
  }
}

void executeOpperation (char opperation, char parameter1,char parameter2, char parameter3=-1) {
  switch(opperation) {
    case 'i' : 
      
    break;
    
   }
}

/* 
 * Define some Cool functions
 */
 void associateValue (char v1, char v2) {
    variables[v1] = variables[v2];
 }

 void input(char v, char pin) {
 
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

