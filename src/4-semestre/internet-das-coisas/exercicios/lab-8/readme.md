# laboratório 8

```c++
int PIEZZO_PIN = 13;
int TMP36_PIN = A0;

void setup()
{
  Serial.begin(9600);
  pinMode(TMP36_PIN, INPUT);
  pinMode(PIEZZO_PIN, OUTPUT);
}

void loop()
{
  int tmp36_value = analogRead(TMP36_PIN);
  float voltage = tmp36_value * (5.0 / 1023.0);
  float tmp_celsius = (voltage - 0.5) * 100.0;

  Serial.print("Temperatura: ");
  Serial.print(tmp_celsius);
  Serial.print("\n");

  if (tmp_celsius >= 30 && tmp_celsius <= 90) {
  	Serial.println("Temperatura esta maior que 30 graus Celsius");

  } else if (tmp_celsius >= 90) {
  	tone(PIEZZO_PIN, 1500);
  }

  if (tmp_celsius < 90) {
  	noTone(PIEZZO_PIN);
  }

  Serial.println("-=--<=>--=-");

  delay(1000);
}
```

![](./circuit.png)