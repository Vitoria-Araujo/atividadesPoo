var AvaliacaoAcademia = /** @class */ (function () {
    function AvaliacaoAcademia(idMatricula, dataMatricula, aluno, avaliacoes) {
        this.idMatricula = idMatricula;
        this.dataMatricula = dataMatricula;
        this.aluno = aluno;
        this.avaliacoes = avaliacoes;
    }
    AvaliacaoAcademia.prototype.infoAluno = function () {
        console.log("Aluno: ".concat(this.aluno));
    };
    AvaliacaoAcademia.prototype.ultimaAvaliacao = function () {
        console.log("\u00DAltima avalia\u00E7\u00E3o: ".concat(this.avaliacoes[this.avaliacoes.length - 1]));
    };
    AvaliacaoAcademia.prototype.avaliacaoPorIndice = function (indice) {
        console.log("Avalia\u00E7\u00E3o ".concat(indice + 1, ": ").concat(this.avaliacoes[indice]));
    };
    return AvaliacaoAcademia;
}());
// Exemplo de uso:
var avaliacao1 = new AvaliacaoAcademia(101, "15/05/2023", "Vanessa", [
    "Peso: 65kg, Altura: 1.70m",
    "Peso: 63kg, Altura: 1.70m",
]);
avaliacao1.infoAluno();
avaliacao1.ultimaAvaliacao();
avaliacao1.avaliacaoPorIndice(0);
var avaliacao2 = new AvaliacaoAcademia(102, "20/06/2023", "Carlos", [
    "Peso: 80kg, Altura: 1.80m",
    "Peso: 78kg, Altura: 1.80m",
    "Peso: 76kg, Altura: 1.80m",
]);
