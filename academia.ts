class Aluno {
  constructor(
    public nome: string,
    public dataNascimento: Date,
    public peso: number,
    public altura: number
  ) {}

calcularIdade(anoAtual: number): number {
    return anoAtual - this.dataNascimento.getFullYear();
}
   
}

const aluno1 = new Aluno("João", new Date(1995, 0, 1), 65, 1.70);
console.log(`${aluno1.nome} tem ${aluno1.calcularIdade(2025)} anos.`);

const aluno2 = new Aluno("Maria", new Date(2000, 5, 15), 55, 1.60);
console.log(`${aluno2.nome} tem ${aluno2.calcularIdade(2025)} anos.`);