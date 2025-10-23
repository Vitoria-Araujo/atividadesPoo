var Aluno = /** @class */ (function () {
    function Aluno(nome, dataNascimento, peso, altura) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.peso = peso;
        this.altura = altura;
    }
    Aluno.prototype.calcularIdade = function (anoAtual) {
        return anoAtual - this.dataNascimento.getFullYear();
    };
    return Aluno;
}());
var aluno1 = new Aluno("João", new Date(1995, 0, 1), 65, 1.70);
console.log("".concat(aluno1.nome, " tem ").concat(aluno1.calcularIdade(2025), " anos."));
var aluno2 = new Aluno("Maria", new Date(2000, 5, 15), 55, 1.60);
console.log("".concat(aluno2.nome, " tem ").concat(aluno2.calcularIdade(2025), " anos."));
