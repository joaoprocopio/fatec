// eh o ponto de interação entre o modelo e o controlador
// é o que o usuário vai visualizar
function somar(a: number, b: number): number {
  return a + b
}

function subtrair(a: number, b: number): number {
  return a - b
}

function despedir(): string {
  return "Até a próxima"
}

export { somar, subtrair, despedir }
