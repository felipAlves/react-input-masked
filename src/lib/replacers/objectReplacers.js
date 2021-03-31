import { replaceValueAfterSanitize } from './replaceValueAfterSanitize'

export const replacers = {
    "removeStrings": (params) =>  replaceValueAfterSanitize(params)
}