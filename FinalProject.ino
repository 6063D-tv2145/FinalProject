const int noWater = 3531;
const int water = 1973;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int a0v = analogRead(A0);

  if (Serial.available() > 0) {
    int byteIn = Serial.read();
    if (byteIn == 10) {
     Serial.println(a0v);
    }
  }
 delay(10);
}
