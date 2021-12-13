/* Recomendado */
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red'

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

// HTMLElement
const input = document.querySelector('input') as HTMLInputElement
input.value = 'Qualquer coisa'
input.focus()

/* Não recomendado */
// Non-null assetion (!)
const body2 = document.querySelector('body')!

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number





