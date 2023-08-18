import { somar, subtrair, despedir } from "./model"

const escolha: string = "sub"

switch (escolha) {
  case "somar":
    console.log(somar(1, 2))
    break
  case "subtrair":
    console.log(subtrair(1, 2))
    break
  case "despedir":
    console.log(despedir())
    break
}
