
/*
 * set an output pin based on the value (this function will decide which kind of output is)
 */
 void setOutputValue(float value, char outputIndex) {
  
  if(outputIndex == 0) {
      digitalWrite(OUTPUT0, value);
  }
  if(outputIndex == 1) {
      digitalWrite(OUTPUT1, value);
  }
 }

