class BombaCombustivel {
  constructor(
    public tipoCombustivel: string,
    public valorLitro: number,
    public quantidadeCombustivel: number = 100
  ) {}

  abastecerPorValor(valor: number) {
    const litros = valor / this.valorLitro
    if (litros > this.quantidadeCombustivel) {
      console.log("Combustível insuficiente na bomba.")
    } else {
      this.quantidadeCombustivel -= litros
      console.log(`Abastecidos ${litros.toFixed(2)} litros de ${this.tipoCombustivel}.`)
      console.log(`Restam ${this.quantidadeCombustivel.toFixed(2)} litros na bomba.`)
    }
  }

  abastecerPorLitro(litros: number) {
    if (litros > this.quantidadeCombustivel) {
      console.log("Combustível insuficiente na bomba.")
    } else {
      const valor = litros * this.valorLitro
      this.quantidadeCombustivel -= litros
      console.log(`Valor a pagar: R$${valor.toFixed(2)}.`)
      console.log(`Restam ${this.quantidadeCombustivel.toFixed(2)} litros na bomba.`)
    }
  }

  alterarValorLitro(novoValor: number) {
    this.valorLitro = novoValor
    console.log(`Novo valor do litro: R$${this.valorLitro.toFixed(2)}.`)
  }

  alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade
    console.log(`Quantidade atualizada: ${this.quantidadeCombustivel.toFixed(2)} litros.`)
  }

  status() {
    console.log(`Tipo: ${this.tipoCombustivel} | Valor/L: R$${this.valorLitro.toFixed(2)} | Quantidade: ${this.quantidadeCombustivel.toFixed(2)}L`)
  }
}

const bomba = new BombaCombustivel("Gasolina", 5.50)

bomba.status()
bomba.abastecerPorValor(55)
bomba.abastecerPorLitro(
10)
bomba.alterarValorLitro(6.00)
bomba.alterarQuantidadeCombustivel(200)
bomba.status()