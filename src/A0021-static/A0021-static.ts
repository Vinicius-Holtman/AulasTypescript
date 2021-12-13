export class Pessoa {
    static idadePadrao = 19;
    static cpfPadrao = '111.111.111-11'

    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string
    ) {}

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }
}

const pessoa = new Pessoa('Vinicius', 'Holtman', 30, '000.000.000-00')
const pessoa2 = Pessoa.criaPessoa('Vinicius2', 'Holtman2')
console.log(pessoa)
console.log(pessoa2)