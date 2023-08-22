class MyNumber {
  numbers: number[] = []

  constructor(numbers: number[]) {
    this.numbers = numbers
  }

  add(number: number): void {
    this.numbers.push(number)
  }

  sum(): number {
    let s = 0

    for (let i = 0; i < this.numbers.length; i++) {
      s += this.numbers[i]
    }

    return s
  }

  max() {
    let max = this.numbers[0]

    for (let i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] > max) {
        max = this.numbers[i]
      }
    }

    return max
  }
}

const myNumber = new MyNumber([8, 2, 9, 4, 5])

console.log("Somatório: ", myNumber.sum())
console.log("Maior: ", myNumber.max())
