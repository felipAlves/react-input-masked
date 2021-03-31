import { removeStrings } from './removeStrings'

// Objeto literal para definir qual o tipo de limpeza necessária para o input
export const sanitizers = {
    "removeStrings": (params) => removeStrings(params.value)
}
