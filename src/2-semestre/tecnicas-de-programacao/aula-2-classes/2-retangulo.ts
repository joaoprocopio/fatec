class Retangulo {
  base: number
  altura: number

  constructor(base: number, altura: number) {
    this.base = base
    this.altura = altura
  }

  area(): number {
    return this.base * this.altura
  }

  perimetro(): number {
    return 2 * this.base + 2 * this.altura
  }

  print(): void {
    console.log("Área:", this.area())
    console.log("Perimetro:", this.perimetro())
  }
}

const retangulo = new Retangulo(3, 2)

retangulo.print()

