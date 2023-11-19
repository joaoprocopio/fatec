/*
  P.4.5. Desenvolva um programa que gere uma fila de atendimento que funcione da seguinte forma:

  As senhas são compostas por caracteres alfanuméricos de 3 dígitos <a-z,0-9>.

  O menu do sistema deve ter 3 opções:
  I)    Gerar senha de atendimento;
  II)   Atender Cliente
  III)  Exibir tamanho da fila.

  I)    é acionada, o sistema gera uma senha alfanumérica (que não pode ter sido gerada antes e não deve ser em ordem sequencial direta para não gerar ansiedade nos clientes) e esta é acrescentada à fila.
  II)   é acionada, o cliente é atendido (imprime-se a mensagem “senha xyz – para ser atendida”) e uma posição da fila é removida (a fila diminui de tamanho).
  III)  é acionada, imprime-se a mensagem “O tamanho da fila é...#tamanho da fila”.
*/

import promptSync from "prompt-sync"

import { generateServiceQueue } from "./services"

const prompt = promptSync()

const serviceQueue = generateServiceQueue()
const options = {
  "0": "Sair",
  "1": "Gerar senha de atendimento",
  "2": "Atender um ticket",
  "3": "Tamanho da fila"
}
let selected: string | null = null

do {
  selected = prompt(
    `Escolha uma opção:\n${Object.entries(options)
      .map(([key, value]) => `${key} - ${value}`)
      .join("\n")}`
  )

  switch (selected) {
    case "1":
      console.log("Senha gerada:", serviceQueue.generateTicket())

      break
    case "2":
      console.log("Ticket atendido:", serviceQueue.attendTicket())

      break
    case "3":
      console.log("Tamanho da fila:", serviceQueue.length)

      break
    case "0":
      console.log("Saindo...")

      break
    default:
      console.log("Opção não existente")

      break
  }
} while (selected !== "0")
