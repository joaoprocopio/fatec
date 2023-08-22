class MyNumber {
  numbers: number[] = []

  constructor(numbers: number[]) {
    this.numbers = numbers
  }

  sum(): number {
    return this.numbers.reduce((prev, next) => prev + next)
  }

  max(): number {
    let max = Number.NEGATIVE_INFINITY

    for (const number of this.numbers) {
      if (number > max) max = number
    }

    return max
  }
}

const myNumber = new MyNumber([8, 2, 9, 4, 5])

console.log("Somatório: ", myNumber.sum())
console.log("Maior: ", myNumber.max())
