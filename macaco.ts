class Macaco {
  constructor(public nome: string, public bucho: string[] = []) {}

  comer(alimento: string) {
    this.bucho.push(alimento);
    console.log(`${this.nome} comeu ${alimento}.`);
  }

  verBucho() {
    if (this.bucho.length === 0) {
      console.log(`${this.nome} está com o bucho vazio.`);
    } else {
      console.log(`${this.nome} tem no bucho: ${this.bucho.join(", ")}.`);
    }
  }

  digerir() {
    if (this.bucho.length > 0) {
      const alimento = this.bucho.shift(); 
      console.log(`${this.nome} digeriu ${alimento}.`);
    } else {
      console.log(`${this.nome} não tem nada para digerir.`);
    }
  }
}


const macaco1 = new Macaco("Chico");
const macaco2 = new Macaco("Leco");


macaco1.comer("Banana");
macaco1.verBucho();

macaco1.comer("Maçã");
macaco1.verBucho();

macaco1.comer("Uva");
macaco1.verBucho();

macaco2.comer("Pera");
macaco2.verBucho();

// Macaco canibal 
macaco2.comer("Chico");
macaco2.verBucho();

macaco1.digerir();
macaco1.verBucho();
