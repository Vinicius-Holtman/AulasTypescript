/* eslint-disable */

//Tipos básicos
let nome: string = 'Luiz'
let idade: number = 0b1010 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol') // symbol

// arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings2: string[] = ['a', 'b', 'c']

// Objetos
const pessoas: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Vinicius',
    idade: 19
}

// Funções
function soma(x: number, y: number): number {
    return x + y
}
// const result = soma(5, 2)
const soma2: (x: number, y: number) => number = (x, y) => x + y
