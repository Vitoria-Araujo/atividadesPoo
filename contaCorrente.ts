class ContaCorrente {
  constructor(
    public numeroConta: number,
    public nomeCorrentista: string,
    public saldo: number = 0
  ) {}

  alterarNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
    console.log(`Nome alterado para: ${this.nomeCorrentista}`);
  }

  deposito(valor: number) {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor.toFixed(
        2
      )} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`
    );
  }

  saque(valor: number) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para o saque.");
    } else {
      this.saldo -= valor;
      console.log(
        `Saque de R$${valor.toFixed(
          2
        )} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`
      );
    }
  }
}


const conta1 = new ContaCorrente(12345, "Victor", 500);

conta1.deposito(200);
conta1.saque(100);
conta1.alterarNome("Pedro Alves");
conta1.saque(700);

const conta2 = new ContaCorrente(67890, "Carlos");