export class Empresa {
    public readonly nome: string
    private readonly colaboradores: Colaborador[] = []
    protected readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaborador(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador)
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly cnpj: string
    ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11')
const colaborador1 = new Colaborador('Vinicius', 'Holtman1')
const colaborador2 = new Colaborador('Vinicius', 'Holtman2')
const colaborador3 = new Colaborador('Vinicius', 'Holtman3')
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)
empresa1.mostrarColaborador()