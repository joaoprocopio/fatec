const parImpar: (nro: number) => string = (nro) => (nro % 2 == 0 ? "par" : "ímpar")

const somarArray: (v: number[]) => void = (v) => {
  for (let i = 0; i < v.length; i++) {
    console.log(v[i], "é", parImpar(v[i]))
  }
}
const v: number[] = [5, 3, 1, 8, 2]

somarArray(v)
