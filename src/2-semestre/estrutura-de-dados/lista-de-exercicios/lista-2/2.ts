// Desenvolva um programa recursivo que calcule o elemento com o maior valor absoluto presente em um array não ordenado.

const randomRange = (length: number): number[] => Array.from({ length }, () => Math.floor(Math.random() * 100))

const biggest = (numbers: number[], index: number = 0, maxNumber: number = Number.NEGATIVE_INFINITY): number => {
  if (index >= numbers.length) {
    return maxNumber
  }

  const currentNumber = numbers[index]

  if (currentNumber > maxNumber) {
    maxNumber = currentNumber
  }

  return biggest(numbers, index + 1, maxNumber)
}

const numbers = randomRange(5)

console.log(numbers)
console.log(biggest(numbers))

export {}
