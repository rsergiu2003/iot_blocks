long duration;
int distance;

int getDistanceHelper() {
     // Clears the trigPin
    digitalWrite(PING_TRIG, LOW);
    delayMicroseconds(2);
    // Sets the trigPin on HIGH state for 10 micro seconds
    digitalWrite(PING_TRIG, HIGH);
    delayMicroseconds(10);
    digitalWrite(PING_TRIG, LOW);
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(PING_ECHO, HIGH);
    // Calculating the distance
    distance= duration*0.034/2;
    // Prints the distance on the Serial Monitor
    return distance;
}

