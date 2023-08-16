class Carro {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca
    this.modelo = modelo
  }

  setMarca(marca: string): void {
  this.marca = marca;
  }
  setModelo(modelo: string): void {
  this.modelo = modelo;
  }
  print(): void {
  console.log(`${this.marca} ${this.modelo}`);
  }
}

const gol = new Carro("VW", "Gol")
const uno = new Carro("Fiat", "Uno")

gol.print()
uno.print()