var Produto = /** @class */ (function () {
    function Produto(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    return Produto;
}());
var ItemPedido = /** @class */ (function () {
    function ItemPedido(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    ItemPedido.prototype.subtotal = function () {
        return this.produto.preco * this.quantidade;
    };
    return ItemPedido;
}());
var Pedido = /** @class */ (function () {
    function Pedido(itens, formaPagamento) {
        this.itens = itens;
        this.formaPagamento = formaPagamento;
    }
    Pedido.prototype.total = function () {
        var soma = 0;
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var item = _a[_i];
            soma += item.subtotal();
        }
        return soma;
    };
    return Pedido;
}());
// Exemplo
var arroz = new Produto("Arroz", 8.50, 50);
var feijao = new Produto("Feijão", 9.00, 30);
var item1 = new ItemPedido(arroz, 2);
var item2 = new ItemPedido(feijao, 3);
var pedido = new Pedido([item1, item2], "Dinheiro");
console.log("Pedido:");
console.log("".concat(item1.quantidade, "x ").concat(item1.produto.nome));
console.log("".concat(item2.quantidade, "x ").concat(item2.produto.nome));
console.log("Pagamento: ".concat(pedido.formaPagamento));
console.log("Total: R$".concat(pedido.total().toFixed(2)));
