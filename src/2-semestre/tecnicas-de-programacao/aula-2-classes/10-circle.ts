class Circulo {
  raio: number

  constructor(raio: number) {
    this.raio = raio
  }

  area() {
    return Math.PI * this.raio ** 2
  }

  perimetro() {
    return this.raio * 2 * Math.PI
  }
}

const circulo = new Circulo(5)
console.log("Área:", circulo.area())
console.log("Perímetro:", circulo.perimetro())
