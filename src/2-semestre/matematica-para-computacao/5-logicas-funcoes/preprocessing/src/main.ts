/**
 * Em sistemas modernos de processamento de linguagem natural, é comum que o texto de entrada seja pré-processado e, com base em algumas estatísticas de ocorrência de palavras, ele seja convertido em outro eliminando-se elementos com pouco ou nenhum significado.
 *
 * Faça um sistema que, dado um texto de entrada (txt), gere um gráfico onde o eixo das abscissas corresponda a uma palavra e o eixo das ordenadas corresponda ao número de vezes que essa palavra aparece no texto.
 *
 * Em termos de probabilidade, esse gráfico associa a uma dada palavra sua probabilidade de ocorrência no texto (função distribuição de probabilidade) e serve para que sejam selecionadas as chamadas stop words (palavras muito frequentes e com baixo significado).
 *
 * Ilustre a execução desse sistema para um texto de entrada arbitrário (.txt) fornecido pelo usuário.
 *
 * Não esqueça de converter todos os caracteres para minúsculo e efetuar a remoção de caracteres tais como pontos, etc.
 */

import Chart from "chart.js/auto"

const chartEl = document.getElementById("chart") as HTMLCanvasElement

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 }
]

const chart = new Chart(chartEl, {
  type: "bar",
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count)
      }
    ]
  }
})
