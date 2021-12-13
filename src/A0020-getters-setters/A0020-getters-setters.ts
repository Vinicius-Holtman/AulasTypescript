export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string
    ) {}

    // getCpf(): string { 
    //     return this.cpf.replace(/\D/g, ''); 
    // }

    // setCpf(valor: string): void {
    //     this.cpf = valor;
    // }

    get cpf(): string { 
        return this._cpf.replace(/\D/g, ''); 
    }

    set cpf(valor: string) {
        this._cpf = valor;
    }
}

const pessoa = new Pessoa('Vinicius', 'Holtman', 30, '000.000.000-00')
pessoa.cpf = '123.123.123-00'
console.log(pessoa.cpf)