import React from 'react'
import PropTypes from 'prop-types'

import InputMask from 'react-input-mask'
import { replacers } from './replacers/objectReplacers' 

const MaskedInput = ({onChange, type, ...props}) => {
    const replaceSanitizedValueInInput = (mask) => {
        const params = {
            onChange,
            mask
        }

        replacers[mask](params)
    }

    // Objeto literal para definir qual o tipo da máscara
    const sanitazeMasks = {
        "cpf": () => replaceSanitizedValueInInput("removeStrings"), 
        "cnpj": () => replaceSanitizedValueInInput("removeStrings"),
        "phone": () => replaceSanitizedValueInInput("removeStrings"),
        "cep": () => replaceSanitizedValueInInput("removeStrings"),
    }

    // Objeto literal para definir qual será a máscara do input
    const typeMasks = {
        "cpf": () => "999.999.999-99",
        "cnpj": () => "99.999.999/9999-99",
        "phone": () => "(99) 99999-9999",
        "cep": () => "99999-999"
    }

    return (
        <InputMask
            {...props}
            mask={typeMasks[type]()}
            onChange={sanitazeMasks[type]}
        />
    )
}

export default MaskedInput