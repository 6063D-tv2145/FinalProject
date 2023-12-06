const int noWater = 3531;
const int water = 1973;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int a0v = analogRead(A0);
  int humidity = map(a0v, water, noWater, 100,0);

  if (Serial.available() > 0) {
    int byteIn = Serial.read();
    if (byteIn == 10) {
     Serial.print(humidity);
    }
  }
 delay(10);
}
