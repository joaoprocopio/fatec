const sequence = (n: number): number => {
  let term: number = 1
  let limit: number = 2

  while (limit <= n) {
    term = 2 * term
    limit = limit + 1
  }

  return term
}

console.log(sequence(3))

export {}
