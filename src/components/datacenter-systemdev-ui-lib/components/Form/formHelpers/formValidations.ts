
export const validate_noRus = (value:string):string => {
    const detectRus:any = /[А-яЁё]/g.test(value)
    if(detectRus) {
        return 'Значение поля не должно содержать букв кириллицы'
    }
    return ''
}
