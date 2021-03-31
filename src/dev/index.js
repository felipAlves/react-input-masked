import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MaskedInput from '../lib'

const App = () => {
    const [cnpj, setCnpj] = useState('')
    console.log(cnpj)

    return (
        <MaskedInput type="cpf" onChange={(event) => setCnpj(event.target.value)} />
    )
}

ReactDOM.render(<App />, document.getElementById("root"))