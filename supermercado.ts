class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public estoque: number
  ) {}
}

class ItemPedido {
  constructor(
    public produto: Produto,
    public quantidade: number
  ) {}

  subtotal() {
    return this.produto.preco * this.quantidade
  }
}

class Pedido {
  constructor(
    public itens: ItemPedido[],
    public formaPagamento: string
  ) {}

  total() {
    let soma = 0
    for (let item of this.itens) {
      soma += item.subtotal()
    }
    return soma
  }
}

// Exemplo
const arroz = new Produto("Arroz", 8.50, 50)
const feijao = new Produto("Feijão", 9.00, 30)

const item1 = new ItemPedido(arroz, 2)
const item2 = new ItemPedido(feijao, 3)

const pedido = new Pedido([item1, item2], "Dinheiro")

console.log("Pedido:")
console.log(`${item1.quantidade}x ${item1.produto.nome}`)
console.log(`${item2.quantidade}x ${item2.produto.nome}`)
console.log(`Pagamento: ${pedido.formaPagamento}`)
console.log(`Total: R$${pedido.total().toFixed(2)}`)
