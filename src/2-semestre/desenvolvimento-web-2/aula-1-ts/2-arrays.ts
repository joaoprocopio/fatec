const nomes: Array<string> = ["Ana", "Carlos", "Débora", "Lucas"]

nomes.forEach((nome) => console.log(nome))

const numbers: number[] = [1, 2, 3, 4, 5]
const double = numbers.map((numero) => numero * 2)
const sum = numbers.reduce((prev, curr) => prev + curr)

console.log("Numeros: ", numbers)
console.log("Double: ", double)
console.log("Soma: ", sum)
