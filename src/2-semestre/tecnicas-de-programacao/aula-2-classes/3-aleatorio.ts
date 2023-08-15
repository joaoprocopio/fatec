class Aleatorio {
  get(): number {
    return Math.floor(Math.random() * 100 + 1);
  }
}

const gerador = new Aleatorio()

console.log(gerador.get())
console.log(gerador.get())
console.log(gerador.get())
console.log(gerador.get())
console.log(gerador.get())
