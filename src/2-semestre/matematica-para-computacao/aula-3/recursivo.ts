const sequence = (n: number): number => {
  if (n == 1) {
    return n
  } else {
    return 2 * sequence(n - 1)
  }
}

console.log(sequence(8))
