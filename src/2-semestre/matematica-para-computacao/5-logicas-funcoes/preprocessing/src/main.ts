/**
 * Em sistemas modernos de processamento de linguagem natural, é comum que o texto de entrada seja pré-processado e, com base em algumas estatísticas de ocorrência de palavras, ele seja convertido em outro eliminando-se elementos com pouco ou nenhum significado.
 *
 * Faça um sistema que, dado um texto de entrada (txt), gere um gráfico onde o eixo das abscissas corresponda a uma palavra e o eixo das ordenadas corresponda ao número de vezes que essa palavra aparece no texto.
 *
 * Em termos de probabilidade, esse gráfico associa a uma dada palavra sua probabilidade de ocorrência no texto (função distribuição de probabilidade) e serve para que sejam selecionadas as chamadas stop words (palavras muito frequentes e com baixo significado).
 *
 * Ilustre a execução desse sistema para um texto de entrada arbitrário (.txt) fornecido pelo usuário.
 *
 * Não esqueça de converter todos os cara`cteres para minúsculo e efetuar a remoção de caracteres tais como pontos, etc.
 */

import Chart from "chart.js/auto"

let data: {
  word: string
  count: number
}[] = []

data = []

const chart = new Chart("chart", {
  type: "bar",
  data: {
    labels: data.map((row) => row.word),
    datasets: [
      {
        label: "Distribuição de Frequência de Palavras",
        data: data.map((row) => row.count)
      }
    ]
  }
})
