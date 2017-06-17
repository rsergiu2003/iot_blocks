#include <SoftwareSerial.h>

SoftwareSerial mySerial(7, 6); // RX, TX

#define TIMEOUT 5000 // mS

void setupWIFI () {
  mySerial.begin(9600);
 SendCommand("AT+RST", "Ready");
 delay(5000);
 SendCommand("AT+CWMODE=1","OK");
 SendCommand("AT+CIFSR", "OK");
 SendCommand("AT+CIPMUX=1","OK");
 SendCommand("AT+CIPSERVER=1,80","OK");
 SendCommand("AT+CIFSR", "OK");
}

   String IncomingString="";
 boolean StringReady = false;
 
void wifiLoop () {
   IncomingString="";
  StringReady = false;
 
 while (mySerial.available()){
   IncomingString=mySerial.readString();
   StringReady= true;
  }
 
  if (StringReady){
    Serial.println("Received String: " + IncomingString);
    char start = IncomingString.indexOf("{{");
    char endOfCode = IncomingString.lastIndexOf("}}");
    if(start>=0) {
//      Serial.println();

      //update the program !
      IncomingString.substring(start+2,endOfCode).toCharArray(program, IncomingString.length());
      Serial.println(program);
    }
  }
}

boolean SendCommand(String cmd, String ack){
  mySerial.println(cmd); // Send "AT+" command to module
  if (!echoFind(ack)) // timed out waiting for ack string
    return true; // ack blank or ack found
}

boolean echoFind(String keyword){
 byte current_char = 0;
 byte keyword_length = keyword.length();
 long deadline = millis() + TIMEOUT;
 while(millis() < deadline){
  if (mySerial.available()){
    char ch = mySerial.read();
    Serial.write(ch);
    if (ch == keyword[current_char])
      if (++current_char == keyword_length){
       Serial.println();
       return true;
    }
   }
  }
 return false; // Timed out
}
