export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}
    
    atacar(personagem: Personagem): void {
        this.bordao()
        console.log(`${this.nome} está atacando!`)
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.nome} agora tem ${this.vida} de vida...`)
    }

    abstract bordao(): void
}

export class Guerreira extends Personagem {
    bordao(): void {
        console.log('Guerreira ao ataque!')
    }
}

export class Monstro extends Personagem {
    bordao(): void {
        console.log('Monster ao ataque!')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 80, 1000)

guerreira.atacar(monstro)
guerreira.atacar(monstro)
guerreira.atacar(monstro)

