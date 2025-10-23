var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(numeroConta, nomeCorrentista, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }
    ContaCorrente.prototype.alterarNome = function (novoNome) {
        this.nomeCorrentista = novoNome;
        console.log("Nome alterado para: ".concat(this.nomeCorrentista));
    };
    ContaCorrente.prototype.deposito = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado. Saldo atual: R$").concat(this.saldo.toFixed(2)));
    };
    ContaCorrente.prototype.saque = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para o saque.");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor.toFixed(2), " realizado. Saldo atual: R$").concat(this.saldo.toFixed(2)));
        }
    };
    return ContaCorrente;
}());
var conta1 = new ContaCorrente(12345, "Victor", 500);
conta1.deposito(200);
conta1.saque(100);
conta1.alterarNome("Pedro Alves");
conta1.saque(700);
var conta2 = new ContaCorrente(67890, "Carlos");
