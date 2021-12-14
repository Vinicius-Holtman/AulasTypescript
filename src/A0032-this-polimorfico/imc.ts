interface IDadosImc {
    peso: number, 
    altura: number
}

export class Indice implements IDadosImc {
    constructor(public peso: number, public altura: number) {}

    calculaImc(): number {
        const somaAltura = this.altura * 2
        const calculaImc = this.peso / somaAltura
        return calculaImc

        // if (calculaImc <= ) {
            
        // }
    }
}

const result = new Indice(80, 1.80)
console.log(result.calculaImc());
