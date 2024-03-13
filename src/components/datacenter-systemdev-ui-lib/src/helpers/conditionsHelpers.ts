
export const convert_1_0_toBool = (value: (1 | 0)): boolean => {
    if (value === 1) return true
    if (value === 0) return false
    return true
}

export const valueIsNotEmpty = (value: unknown): boolean => {

    if (value === 0) return true

    if (!value) {
        return false
    }


    // arr or obj
    if (typeof value === 'object') {
        return Object.keys(value).length > 0
    }

    return true
}

export const allValuesIsNotEmpty = (values: unknown[]): boolean => {
    for (let i = values.length; i > 0; i-- ) {
        const isNotEmpty = valueIsNotEmpty(values[i-1])
        if(!isNotEmpty){
            return false
        }
    }
    return true;
}
