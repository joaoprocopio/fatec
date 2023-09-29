// Desenvolva um programa recursivo para calcular o menor elemento presente em um array não ordenado.

const randomRange = (length: number): number[] => Array.from({ length }, () => Math.floor(Math.random() * 100))

const smallest = (numbers: number[], index: number = 0, minNumber: number = Number.POSITIVE_INFINITY): number => {
  if (index >= numbers.length) {
    return minNumber
  }

  const currentNumber = numbers[index]

  if (currentNumber < minNumber) {
    minNumber = currentNumber
  }

  return smallest(numbers, index + 1, minNumber)
}

const numbers = randomRange(5)

console.log(numbers)
console.log(smallest(numbers))
