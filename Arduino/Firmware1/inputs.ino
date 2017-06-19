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
  // 1 - digital in
  if(sensor == 1) {
    return digitalRead(DIGITAL0);
  }
}

float getDS18B20(char index) {
    sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);
    return temp;
}

