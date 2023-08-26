// Crie um programa em typescript e defina

// a) Uma variável que tenha anotação explícita de tipo numérico.
const number: number = 42
console.log(typeof number)

// b) Uma variável que tenha anotação explícita de tipo string.
const string: string = "The answer"
console.log(typeof string)

// c)  Uma variável que não tenha anotação explícita de tipo mas que receba um valor lógico.
const boolean = !(number === 40)
console.log(typeof boolean)

// d) Uma variável que seja um JSON contendo propriedades de tipo numérico e de tipo string.
const object: {
  [K: string]: string | number
} = {
  42: "The answer"
}
console.log(typeof object)

// e)  Um array numérico com anotação explícita de tipo.
const array: number[] = [1, 2, 3]
console.log(typeof array)

export {}
