type TOp = (a: number, b: number) => number
const sum: TOp = (a, b) => a + b
const dif: TOp = (a, b) => a - b

const operacao = (f: TOp, a: number, b: number) => f(a, b)
console.log("5 + 3:", operacao(sum, 5, 3))
console.log("5 - 3:", operacao(dif, 5, 3))
