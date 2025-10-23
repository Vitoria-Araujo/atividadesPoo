var Macaco = /** @class */ (function () {
    function Macaco(nome, bucho) {
        if (bucho === void 0) { bucho = []; }
        this.nome = nome;
        this.bucho = bucho;
    }
    Macaco.prototype.comer = function (alimento) {
        this.bucho.push(alimento);
        console.log("".concat(this.nome, " comeu ").concat(alimento, "."));
    };
    Macaco.prototype.verBucho = function () {
        if (this.bucho.length === 0) {
            console.log("".concat(this.nome, " est\u00E1 com o bucho vazio."));
        }
        else {
            console.log("".concat(this.nome, " tem no bucho: ").concat(this.bucho.join(", "), "."));
        }
    };
    Macaco.prototype.digerir = function () {
        if (this.bucho.length > 0) {
            var alimento = this.bucho.shift();
            console.log("".concat(this.nome, " digeriu ").concat(alimento, "."));
        }
        else {
            console.log("".concat(this.nome, " n\u00E3o tem nada para digerir."));
        }
    };
    return Macaco;
}());
var macaco1 = new Macaco("Chico");
var macaco2 = new Macaco("Leco");
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
