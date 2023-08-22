class Operacao {
  left: number
  right: number

  constructor(left: number, right: number) {
    this.left = left
    this.right = right
  }

  somar() {
    return this.left + this.right
  }

  subtrair() {
    return this.left - this.right
  }

  dividir() {
    return this.left / this.right
  }
}

const operacao = new Operacao(3, 5)

console.log("Soma: ", operacao.somar())
console.log("Soma: ", operacao.subtrair())
console.log("Soma: ", operacao.dividir())

export {}
