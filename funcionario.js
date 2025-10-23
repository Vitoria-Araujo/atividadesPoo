var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.aumentarSalario = function (porcentualDeAumento) {
        this.salario += this.salario * (porcentualDeAumento / 100);
    };
    return Funcionario;
}());
var funcionario1 = new Funcionario("Vanessa", 3000);
console.log("Funcion\u00E1rio: ".concat(funcionario1.getNome()));
console.log("Sal\u00E1rio atual: R$".concat(funcionario1.getSalario().toFixed(2)));
funcionario1.aumentarSalario(10);
console.log("Sal\u00E1rio ap\u00F3s aumento: R$".concat(funcionario1.getSalario().toFixed(2)));
