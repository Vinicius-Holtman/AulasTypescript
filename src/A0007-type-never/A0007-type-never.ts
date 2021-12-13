// função para criar um erro ou gerar um loop de verificação
export function criarErro(): never {
    throw new Error('Erro qualquer')
}

criarErro()