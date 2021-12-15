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

const result = new Indice(90, 1.94)
console.log(result.calculaImc());
