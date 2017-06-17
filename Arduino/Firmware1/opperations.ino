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

