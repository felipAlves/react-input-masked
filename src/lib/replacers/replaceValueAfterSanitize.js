import { sanitizers } from '../sanitizers/objectSanitizers' 

export const replaceValueAfterSanitize = ({ onChange, mask }) => {
    const anotherParams = {}

    if(mask === "ReplaceToDecimal") {
        anotherParams.separator
    }

    onChange({
        ...event,
        target: {
            ...event.target,
            value: sanitizers[mask]({ value: event.target.value, ...anotherParams })
        }
    })
}