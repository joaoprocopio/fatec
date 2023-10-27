/*
P.4.5. Desenvolva um programa que gere uma fila de atendimento que funcione da seguinte forma:

As senhas são compostas por caracteres alfanuméricos de 3 dígitos <a-z,0-9>.

O menu do sistema deve ter 3 opções:
I) Gerar senha de atendimento;
II) Atender Cliente
III) Exibir tamanho da fila.

I) é acionada, o sistema gera uma senha alfanumérica (que não pode ter sido gerada antes e não deve ser em ordem sequencial direta para não gerar ansiedade nos clientes) e esta é acrescentada à fila. Quando a opção
II) é acionada, o cliente é atendido (imprime-se a mensagem “senha xyz – para ser atendida”) e uma posição da fila é removida (a fila diminui de tamanho). 
III) é acionada, imprime-se a mensagem “O tamanho da fila é...#tamanho da fila”.
*/

const AvailableChars = "abcdefghijklmnopqrstuvwxyz0123456789"

class ServiceQueue {
  private _queue: string[] = []

  public get queue(): string[] {
    return this._queue
  }

  public get queueLength(): number {
    return this._queue.length
  }

  public generateTicket(): string {
    const ticket = this.generateRandomTicket()

    this._queue.push(ticket)

    return ticket
  }

  public attendTicket(): string | undefined {
    const ticket = this._queue.shift()

    return ticket
  }

  private generateRandomTicket(): string {
    const randomIndex = Math.floor(Math.random() * AvailableChars.length)
    const ticket = AvailableChars.slice(randomIndex, randomIndex + 3)

    return ticket
  }
}

const serviceQueue = new ServiceQueue()

console.log("Estado da fila:", serviceQueue.queue)
console.log("Ticket gerado! ", serviceQueue.generateTicket())
console.log("Estado da fila: ", serviceQueue.queue)
console.log("Gerando mais um ticket!", serviceQueue.generateTicket())
console.log("Estado da fila: ", serviceQueue.queue)
console.log("Atendendo um ticket!", serviceQueue.attendTicket())
console.log("Estado da fila: ", serviceQueue.queue)
console.log("Atendendo mais um ticket!", serviceQueue.attendTicket())
console.log("Estado da fila: ", serviceQueue.queue)
