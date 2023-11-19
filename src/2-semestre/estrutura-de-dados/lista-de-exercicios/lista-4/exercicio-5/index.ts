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

const AvailableChars = "abcdefghijklmnopqrstuvwxyz0123456789"

export class Queue<T> {
  private _queue: T[] = []

  public get queue(): T[] {
    return this._queue
  }

  public get length(): number {
    return this._queue.length
  }

  public enqueue(item: T): T[] {
    this._queue.push(item)

    return this.queue
  }

  public dequeue(): T | null {
    const item = this._queue.shift()

    return item || null
  }
}

export class ServiceQueue extends Queue<string> {
  public attendTicket(): string | null {
    const ticket = this.dequeue()

    return ticket
  }

  public generateTicket(): string {
    const random = Math.floor(Math.random() * AvailableChars.length)
    const ticket = AvailableChars.slice(random, random + 3)

    this.enqueue(ticket)

    return ticket
  }
}
