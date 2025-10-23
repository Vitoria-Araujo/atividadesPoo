class Televisor {
  constructor(public canal: number, public volume: number) {}

  mudarCanal(novoCanal: number) {
    if (novoCanal >= 1 && novoCanal <= 99) {
      this.canal = novoCanal;
      console.log(`Canal alterado para: ${this.canal}`);
    } else {
      console.log("Canal inválido! Escolha entre 1 e 99.");
    }
  }

  aumentarVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(`Volume aumentado para: ${this.volume}`);
    } else {
      console.log("Volume máximo (100) atingido.");
    }
  }

  diminuirVolume() {
    if (this.volume > 0) {
      this.volume--;
      console.log(`Volume diminuído para: ${this.volume}`);
    } else {
      console.log("Volume mínimo (0) atingido.");
    }
  }

  status() {
    console.log(`Canal atual: ${this.canal} | Volume: ${this.volume}`);
  }
}


const tv = new Televisor(5, 20);

tv.status();
tv.mudarCanal(10);
tv.aumentarVolume();
tv.diminuirVolume();
tv.mudarCanal(150);
tv.status();
