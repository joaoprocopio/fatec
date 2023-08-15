const converter = <T>(vet: Array<T>) => {
  const res = []

  for (let i = 0; i < vet.length; i++) {
    res[i] = String(vet[i])
  }

  return res
}

const vetor = [5, 3, 1, 8, 2]

console.log("Resultado: ", converter(vetor))
