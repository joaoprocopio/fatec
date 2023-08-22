class Ponto {
  left: number
  right: number

  constructor(left: number, right: number) {
    this.left = left
    this.right = right
  }

  distancia(ponto: Ponto) {
    return Math.sqrt((this.left - ponto.left) ** 2 + (this.right - ponto.right) ** 2)
  }
}

const a = new Ponto(3, 5)
const b = new Ponto(1, 2)

console.log("Distancia: ", a.distancia(b))

export {}
