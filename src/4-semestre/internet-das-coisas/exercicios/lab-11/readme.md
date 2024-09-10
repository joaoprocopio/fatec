# laboratório 11

```c++
int BUTTON_PIN 	= 13;
int NPN_BJT_PIN	= 12;

void setup() {
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT);
  pinMode(NPN_BJT_PIN, OUTPUT);
}

void loop() {
  int button_state = digitalRead(BUTTON_PIN);

  if (button_state == HIGH) {
  	digitalWrite(NPN_BJT_PIN, HIGH);
  } else {
    digitalWrite(NPN_BJT_PIN, LOW);
  }

  delay(1000);
}
```

![](./circuit.png)