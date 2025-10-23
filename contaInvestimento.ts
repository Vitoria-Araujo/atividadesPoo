class ContaInvestimento {
  constructor(public saldo: number, public taxaJuros: number) {}

  adicioneJuros() {
    this.saldo += this.saldo * (this.taxaJuros / 100);
  }
}

const poupanca = new ContaInvestimento(1000, 10);

for (let i = 0; i < 5; i++) {
  poupanca.adicioneJuros();
}

console.log(`Saldo final: R$${poupanca.saldo.toFixed(2)}`);
