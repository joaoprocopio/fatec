# laboratório 7

```c++
int LDR_PIN = A0;
int LED_PIN = 13;

void setup()
{
  Serial.begin(9600);
  pinMode(LDR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
}

void loop()
{
  int ldr_value = analogRead(LDR_PIN);

  if (ldr_value < 500) {
  	digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  delay(1000);
}
```

![](./circuit.png)