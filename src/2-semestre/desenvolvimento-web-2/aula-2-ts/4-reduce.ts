function item(entrada: string): string {
  return `\t<li>${entrada}</li>`
}

function list(items: string[]): string {
  const sum = items.map((it) => item(it))

  return `<ul>\n${sum.join(`\n`)}\n</ul>\n`
}
const frutas = ["Manga", "Laranja", "Maça", "Uva"]

const resultadoR = list(frutas)

console.log(resultadoR)
