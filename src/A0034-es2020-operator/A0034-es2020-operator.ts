// Encadeamento opcional e Operador de coalescência nula
type Documento = {
    titulo: string
    texto: string
    data?: Date
}

const documento: Documento = {
    titulo: 'Um titulo',
    texto: 'Um texto',
    data: new Date()
}

console.log(documento.data?.toDateString() ?? 'Vish, não existe data')
console.log(undefined ?? 'Vish, não existe data')
console.log(null ?? 'Vish, não existe data')