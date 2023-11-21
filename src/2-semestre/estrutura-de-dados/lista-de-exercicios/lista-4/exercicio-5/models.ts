import { AlphanumericCharacters } from "./constants"

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
    const random = Math.floor(Math.random() * AlphanumericCharacters.length)
    const ticket = AlphanumericCharacters.slice(random, random + 3)

    // Re-gera o ticket caso ele já exista na fila ou não tenha 3 caracteres
    if (this.queue.includes(ticket) || ticket.length !== 3) {
      return this.generateTicket()
    }

    this.enqueue(ticket)

    return ticket
  }
}
