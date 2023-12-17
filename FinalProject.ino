const int AVGSIZE = 20;

int AVG[AVGSIZE];
int currentIndex;

void setup() {
  Serial.begin(9600);

  currentIndex = 0;

  for (int i = 0; i < AVGSIZE; i++) {
    AVG[i] = 0;
  }
}

void loop() {
  int a0v = analogRead(A0);

  AVG[currentIndex] = a0v;
  currentIndex = (currentIndex + 1) % AVGSIZE;

  int sum = 0;
  for (int i = 0; i < AVGSIZE; i++) {
    sum += AVG[i];
  }

  int avg = sum / AVGSIZE;

  Serial.println(avg);

  delay(10);
}