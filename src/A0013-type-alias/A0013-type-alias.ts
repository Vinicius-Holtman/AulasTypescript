type Idade = number;
type Pessoa = {
    nome: string,
    idade: Idade,
    salario: number,
    corPreferida?: string
}

type CorRGB = 'Red' | 'Green' | 'Blue'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Luiz',
    salario: 200_000
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'Blue'))
console.log(pessoa)