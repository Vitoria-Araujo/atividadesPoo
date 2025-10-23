class AvaliacaoAcademia {
  constructor(
    public idMatricula: number,
    public dataMatricula: string,
    public aluno: string,
    public avaliacoes: string[]
  ) {}

  infoAluno() {
    console.log(`Aluno: ${this.aluno}`);
  }

  ultimaAvaliacao() {
    console.log(
      `Última avaliação: ${this.avaliacoes[this.avaliacoes.length - 1]}`
    );
  }

  avaliacaoPorIndice(indice: number) {
    console.log(`Avaliação ${indice + 1}: ${this.avaliacoes[indice]}`);
  }
}

// Exemplo de uso:
const avaliacao1 = new AvaliacaoAcademia(101, "15/05/2023", "Vanessa", [
  "Peso: 65kg, Altura: 1.70m",
  "Peso: 63kg, Altura: 1.70m",
]);

avaliacao1.infoAluno();
avaliacao1.ultimaAvaliacao();
avaliacao1.avaliacaoPorIndice(0);
const avaliacao2 = new AvaliacaoAcademia(102, "20/06/2023", "Carlos", [
  "Peso: 80kg, Altura: 1.80m",
  "Peso: 78kg, Altura: 1.80m",
  "Peso: 76kg, Altura: 1.80m",
]);