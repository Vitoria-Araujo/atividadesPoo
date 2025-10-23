var Livro = /** @class */ (function () {
    function Livro(titulo, autor, disponivel) {
        if (disponivel === void 0) { disponivel = true; }
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    return Livro;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var Emprestimo = /** @class */ (function () {
    function Emprestimo(pessoa, livro, dataEmprestimo) {
        this.pessoa = pessoa;
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
    }
    Emprestimo.prototype.realizarEmprestimo = function () {
        if (this.livro.disponivel) {
            this.livro.disponivel = false;
            console.log("".concat(this.pessoa.nome, " pegou o livro \"").concat(this.livro.titulo, "\" em ").concat(this.dataEmprestimo, "."));
        }
        else {
            console.log("O livro \"".concat(this.livro.titulo, "\" j\u00E1 est\u00E1 emprestado."));
        }
    };
    Emprestimo.prototype.devolverLivro = function () {
        if (!this.livro.disponivel) {
            this.livro.disponivel = true;
            console.log("".concat(this.pessoa.nome, " devolveu o livro \"").concat(this.livro.titulo, "\"."));
        }
        else {
            console.log("O livro \"".concat(this.livro.titulo, "\" j\u00E1 est\u00E1 dispon\u00EDvel."));
        }
    };
    return Emprestimo;
}());
// Exemplo de uso
var livro1 = new Livro("Dom Casmurro", "Machado de Assis");
var livro2 = new Livro("O Cortiço", "Aluísio Azevedo");
var pessoa1 = new Pessoa("Vanessa");
var pessoa2 = new Pessoa("Carlos");
var emprestimo1 = new Emprestimo(pessoa1, livro1, "22/10/2025");
var emprestimo2 = new Emprestimo(pessoa2, livro2, "22/10/2025");
emprestimo1.realizarEmprestimo();
emprestimo2.realizarEmprestimo();
emprestimo1.devolverLivro();
emprestimo1.realizarEmprestimo();
emprestimo2.devolverLivro();
emprestimo2.devolverLivro();
