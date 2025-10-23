class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public disponivel: boolean = true
  ) {}
}

class Pessoa {
  constructor(public nome: string) {}
}

class Emprestimo {
  constructor(
    public pessoa: Pessoa,
    public livro: Livro,
    public dataEmprestimo: string
  ) {}

  realizarEmprestimo() {
    if (this.livro.disponivel) {
      this.livro.disponivel = false;
      console.log(
        `${this.pessoa.nome} pegou o livro "${this.livro.titulo}" em ${this.dataEmprestimo}.`
      );
    } else {
      console.log(`O livro "${this.livro.titulo}" já está emprestado.`);
    }
  }

  devolverLivro() {
    if (!this.livro.disponivel) {
      this.livro.disponivel = true;
      console.log(
        `${this.pessoa.nome} devolveu o livro "${this.livro.titulo}".`
      );
    } else {
      console.log(`O livro "${this.livro.titulo}" já está disponível.`);
    }
  }
}

// Exemplo de uso
const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("O Cortiço", "Aluísio Azevedo");

const pessoa1 = new Pessoa("Vanessa");
const pessoa2 = new Pessoa("Carlos");

const emprestimo1 = new Emprestimo(pessoa1, livro1, "22/10/2025");
const emprestimo2 = new Emprestimo(pessoa2, livro2, "22/10/2025");

emprestimo1.realizarEmprestimo();
emprestimo2.realizarEmprestimo();
emprestimo1.devolverLivro();
emprestimo1.realizarEmprestimo();
emprestimo2.devolverLivro();
emprestimo2.devolverLivro();