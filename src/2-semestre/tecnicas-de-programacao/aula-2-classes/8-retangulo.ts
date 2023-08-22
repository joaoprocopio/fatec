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

class Retangulo {
  iE: Ponto
  sD: Ponto

  constructor(iE: Ponto, sD: Ponto) {
    this.iE = iE
    this.sD = sD
  }

  area() {
    const x = iE.x - sD.x
    const y = iE.y - sD.y

    return y * x
  }
}

const iE = new Ponto(1, 2)
const sD = new Ponto(3, 5)
const retangulo = new Retangulo(iE, sD)

console.log("Area: ", retangulo.area())

export {}
