var Televisor = /** @class */ (function () {
    function Televisor(canal, volume) {
        this.canal = canal;
        this.volume = volume;
    }
    Televisor.prototype.mudarCanal = function (novoCanal) {
        if (novoCanal >= 1 && novoCanal <= 99) {
            this.canal = novoCanal;
            console.log("Canal alterado para: ".concat(this.canal));
        }
        else {
            console.log("Canal inválido! Escolha entre 1 e 99.");
        }
    };
    Televisor.prototype.aumentarVolume = function () {
        if (this.volume < 100) {
            this.volume++;
            console.log("Volume aumentado para: ".concat(this.volume));
        }
        else {
            console.log("Volume máximo (100) atingido.");
        }
    };
    Televisor.prototype.diminuirVolume = function () {
        if (this.volume > 0) {
            this.volume--;
            console.log("Volume diminu\u00EDdo para: ".concat(this.volume));
        }
        else {
            console.log("Volume mínimo (0) atingido.");
        }
    };
    Televisor.prototype.status = function () {
        console.log("Canal atual: ".concat(this.canal, " | Volume: ").concat(this.volume));
    };
    return Televisor;
}());
var tv = new Televisor(5, 20);
tv.status();
tv.mudarCanal(10);
tv.aumentarVolume();
tv.diminuirVolume();
tv.mudarCanal(150);
tv.status();
