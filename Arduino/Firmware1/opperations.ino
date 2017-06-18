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

char lcdbuffer[8];
char sfloat[8];
void lcdValue(char v) {
  dtostrf(variables[v], 4, 2, sfloat);
  sprintf(lcdbuffer,"%s",sfloat);
   segmeted_module.setDisplayToString(lcdbuffer);
 }


 void setVariable(char v, int value) {
  variables[v] = value;
 }

 void invert(char v1, char v2) {
  if(variables[v1] == 1) {
    variables[v2] = 0;
  } else {
    variables[v2] = 1;
  }
 }

 void playTone(char v1, char v2) {
  if(variables[v1] > 0) {
    tone(TONE_PIN,variables[v2]*30, 200);
  }
 }

void getDistance(char v1) {
  variables[v1] = getDistanceHelper();
}

