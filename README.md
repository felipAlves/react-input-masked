# react-input-masked
The react-input-mask is a react component that returns an input-mask with the sanitized value and formatted for use


### Getting Started

1. First. You need to install it, just like. You would do width most any NPM packages:

```
npm i --save react-input-masked
```

Or with yarn:

```
yarn add react-input-masked
```

1. Then, you need to import the library component within your own component

``` javascript
import React from 'react'
import MaskedInput from 'react-input-masked'
```

2. You can now start using the component

``` javascript
import React, { useState } from 'react'
import MaskedInput from 'react-input-masked'

const AnyComponent = () => {
    const [cpf, setCpf] = useState('')

    return <MaskedInput type="cpf" onChange={event => setState(event.target.value)} />
}
```