const formattedPrint = (text: string, value: unknown): void => {
  console.log(`${text} ${value}`)
}

type TOperacao = (a: number, b: number) => number
const soma: TOperacao = (a, b) => a + b

const dif: TOperacao = (a, b) => a - b

const minus = dif

formattedPrint("Soma: ", soma(2, 3))
formattedPrint("Dif: ", dif(2, 3))
formattedPrint("Minus: ", minus(2, 3))
