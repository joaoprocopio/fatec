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

import inquirer from "inquirer"

import { generateServiceQueue } from "./services"
import { sleep } from "./utils"

const prompt = inquirer.createPromptModule()
const serviceQueue = generateServiceQueue()

const generateQuestions = async () => {
  const questions = await prompt([
    {
      type: "list",
      name: "selected",
      message: ["Escolha uma opção"],
      choices: [
        {
          name: "Gerar senha de atendimento",
          value: "generate"
        },
        {
          name: "Atender próxima senha",
          value: "attend"
        },
        {
          name: "Exibir o tamanho da fila",
          value: "length"
        },
        {
          name: "Sair",
          value: "quit"
        }
      ]
    }
  ])

  return questions
}

const menu = async () => {
  console.clear()

  const { selected } = await generateQuestions()

  switch (selected) {
    case "quit":
      console.log("Saindo...")

      break
    case "generate":
      console.log(`Senha de atendimento gerada: ${serviceQueue.generateTicket()}`)

      break
    case "attend":
      console.log(`Senha de atendimento à ser atendida: ${serviceQueue.attendTicket()}`)

      break
    case "length":
      console.log(`Comprimento da fila de atendimento: ${serviceQueue.length}`)

      if (serviceQueue.length) {
        console.table(serviceQueue.queue)
      }

      break
    default:
      break
  }

  await sleep(2.0 * 1000)

  if (selected !== "quit") {
    await menu()
  }
}

menu()
