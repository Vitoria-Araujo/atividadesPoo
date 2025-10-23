var BombaCombustivel = /** @class */ (function () {
    function BombaCombustivel(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        if (quantidadeCombustivel === void 0) { quantidadeCombustivel = 100; }
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    BombaCombustivel.prototype.abastecerPorValor = function (valor) {
        var litros = valor / this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            console.log("Combustível insuficiente na bomba.");
        }
        else {
            this.quantidadeCombustivel -= litros;
            console.log("Abastecidos ".concat(litros.toFixed(2), " litros de ").concat(this.tipoCombustivel, "."));
            console.log("Restam ".concat(this.quantidadeCombustivel.toFixed(2), " litros na bomba."));
        }
    };
    BombaCombustivel.prototype.abastecerPorLitro = function (litros) {
        if (litros > this.quantidadeCombustivel) {
            console.log("Combustível insuficiente na bomba.");
        }
        else {
            var valor = litros * this.valorLitro;
            this.quantidadeCombustivel -= litros;
            console.log("Valor a pagar: R$".concat(valor.toFixed(2), "."));
            console.log("Restam ".concat(this.quantidadeCombustivel.toFixed(2), " litros na bomba."));
        }
    };
    BombaCombustivel.prototype.alterarValorLitro = function (novoValor) {
        this.valorLitro = novoValor;
        console.log("Novo valor do litro: R$".concat(this.valorLitro.toFixed(2), "."));
    };
    BombaCombustivel.prototype.alterarQuantidadeCombustivel = function (novaQuantidade) {
        this.quantidadeCombustivel = novaQuantidade;
        console.log("Quantidade atualizada: ".concat(this.quantidadeCombustivel.toFixed(2), " litros."));
    };
    BombaCombustivel.prototype.status = function () {
        console.log("Tipo: ".concat(this.tipoCombustivel, " | Valor/L: R$").concat(this.valorLitro.toFixed(2), " | Quantidade: ").concat(this.quantidadeCombustivel.toFixed(2), "L"));
    };
    return BombaCombustivel;
}());
var bomba = new BombaCombustivel("Gasolina", 5.50);
bomba.status();
bomba.abastecerPorValor(55);
bomba.abastecerPorLitro(10);
bomba.alterarValorLitro(6.00);
bomba.alterarQuantidadeCombustivel(200);
bomba.status();
