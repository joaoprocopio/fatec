const nomes: string[] = ["Ana", "Carlos", "Débora", "Lucas"]

nomes.forEach((nome) => console.log(nome))

const carros: string[] = ["Uno", "Gol", "Corsa"]

console.log([...carros, ...nomes])

const numbers: number[] = [1, 2, 3, 4, 5]
const double = numbers.map((numero) => numero * 2)
const sum = numbers.reduce((prev, curr) => prev + curr)

console.log("Numeros: ", numbers)
console.log("Double: ", double)
console.log("Soma: ", sum)
