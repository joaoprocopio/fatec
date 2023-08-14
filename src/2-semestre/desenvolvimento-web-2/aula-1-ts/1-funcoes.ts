type TOperacao = (a: number, b: number) => number
type TCallback = (f: TOperacao, a: number, b: number) => number

const callback: TCallback = (f, a, b) => f(a, b)

const dif: TOperacao = (a, b) => a - b
const div: TOperacao = (a, b) => a / b
const pot: TOperacao = (a, b) => a ** b

console.log("Dif: ", callback(dif, 2, 3))
console.log("Div: ", callback(div, 2, 3))
console.log("Pot: ", callback(pot, 2, 3))
