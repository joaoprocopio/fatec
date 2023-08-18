import promptSync from "prompt-sync"

import { somar, subtrair, despedir } from "./model"

const prompt = promptSync()
const escolha: string = prompt("Escolha: ")
const primeiroNumero: number = parseInt(prompt("Digite o primeiro número: "))
const segundoNumero: number = parseInt(prompt("Digite o segundo número: "))

switch (escolha) {
  case "somar":
    console.log(somar(primeiroNumero, segundoNumero))
    break
  case "subtrair":
    console.log(subtrair(primeiroNumero, segundoNumero))
    break
  case "despedir":
    console.log(despedir())
    break
}
