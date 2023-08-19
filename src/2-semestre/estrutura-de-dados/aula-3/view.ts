import promptSync from "prompt-sync"

import { somar, subtrair, despedir } from "./model"

const prompt = promptSync()
const escolha: string = prompt("Escolha: ")

switch (escolha) {
  case "somar":
    const soma1: number = parseInt(prompt("Digite o primeiro número: "))
    const soma2: number = parseInt(prompt("Digite o segundo número: "))

    console.log(somar(soma1, soma2))
    break
  case "subtrair":
    const sub1: number = parseInt(prompt("Digite o primeiro número: "))
    const sub2: number = parseInt(prompt("Digite o segundo número: "))

    console.log(subtrair(sub1, sub2))
    break
  case "despedir":
    console.log(despedir())
    break
}

export {}
