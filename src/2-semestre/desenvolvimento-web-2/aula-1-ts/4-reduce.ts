function item(entrada: string): string {
  return `\t<li>${entrada}</li>\n`
}
function list(elementos: string[]): string {
  const soma = elementos.reduce((prev, next) => prev + item(next), "")

  return `<ul>\n${soma}\n</ul>\n`
}
const frutas = ["Manga", "Laranja", "Maça", "Uva"]

const resultado = list(frutas)

console.log(resultado)
