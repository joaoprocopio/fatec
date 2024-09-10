# laboratório 9

```c++
int LED_PIN = 13;
int PIR_PIN = 12;

void setup()
{
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  pinMode(PIR_PIN, INPUT);
}

void loop()
{
  int pir_state = digitalRead(PIR_PIN);

  if (pir_state == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
  	digitalWrite(LED_PIN, LOW);
  }

  delay(1000);
}
```

![](./circuit.png)