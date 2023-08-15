const operarAf = (v1: number[], v2: string[]) => {
  const res = []

  for (let i = 0; i < v1.length; i++) {
    res[i] = v1[i] + v2[i]
  }

  return res
}

const vetorAf1 = [5, 3, 1, 8, 2]
const vetorAf2 = ["M", "a", "r", "i", "a"]

console.log("Resultado: ", operarAf(vetorAf1, vetorAf2))
