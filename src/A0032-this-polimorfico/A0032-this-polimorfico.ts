export class Calculadora {
    constructor(public numero: number) { }

    add(n: number): this {
        this.numero += n
        return this
    }

    sub(n: number): this {
        this.numero -= n
        return this
    }

    div(n: number): this {
        this.numero /= n
        return this
    }

    mul(n: number): this {
        this.numero *= n
        return this
    }
}

const calculadora = new Calculadora(10)
calculadora.add(5).mul(10)
console.log(calculadora)