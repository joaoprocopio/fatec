class Ponto {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  distancia(ponto: Ponto) {
    const xDiff = this.x - ponto.x
    const yDiff = this.y - ponto.y

    return Math.sqrt(xDiff ** 2 + yDiff ** 2)
  }
}

const a = new Ponto(3, 5)
const b = new Ponto(1, 2)

console.log("Distancia: ", a.distancia(b))

export {}
