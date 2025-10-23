class Funcionario {
  constructor(public nome: string, public salario: number) {}

  getNome() {
    return this.nome;
  }

  getSalario() {
    return this.salario;
  }

  aumentarSalario(porcentualDeAumento: number) {
    this.salario += this.salario * (porcentualDeAumento / 100);
  }
}

const funcionario1 = new Funcionario("Vanessa", 3000);

console.log(`Funcionário: ${funcionario1.getNome()}`);
console.log(`Salário atual: R$${funcionario1.getSalario().toFixed(2)}`);

funcionario1.aumentarSalario(10);

console.log(`Salário após aumento: R$${funcionario1.getSalario().toFixed(2)}`);
