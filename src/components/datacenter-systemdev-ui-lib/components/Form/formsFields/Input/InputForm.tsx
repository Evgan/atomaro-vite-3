import React, {useState, useEffect, ReactNode} from 'react'
import { FieldInputProps, FieldMetaState } from 'react-final-form'

import { Input } from '../../../index'
import {TYPES_INPUT} from '../../../constants'
import {
    PasswordShow,
    PasswordHide
} from '../../../icons'
import {
    ItemFormType,
    IValidationRules,
  ITransformationRule
} from '../../../../Form/types.ts'
import { IInput } from '../../../inputs/Input/InputHOC.tsx'



declare interface IInputForm extends ItemFormType, IInput{
    onChange?: any,
    input?: FieldInputProps<any, any>,
    meta?: FieldMetaState<any>,
    label?: string,
    className?: string,
    validationRules?:IValidationRules[],
    transformationRule?:ITransformationRule,
    disabled?: boolean,
    tooltip?: string,
    hint?: string,
}
const InputForm = ({
    onChange: parentChangeHandler,
    input,
    meta: { error, touched } = {},
    label,
    className= '',
    validationRules = [],
    transformationRule,
    disabled = false,
    size,
    tooltip,
    useForm
}: IInputForm) => {
    const  {
        value,
        onChange,
        onFocus,
        onBlur,
        name,
        type
    } = input || {}
    const form = useForm()
    const [showPass, setShowPass] = useState<boolean>(false)
    const [typeState, setTypeState] = useState<string>(type!)
    const [icon, setIcon] = useState<ReactNode>()
    /*const onChangeInput = useCallback(
        e => {
            if (parentChangeHandler) parentChangeHandler(e)
            onChange(e)
        },
        [onChange, parentChangeHandler]
    )*/

    useEffect(() => {
        const {value}=input || {}
        console.log(' > value = ',value)
        if (type === TYPES_INPUT.password) {
            setTypeState(showPass ? TYPES_INPUT.text : TYPES_INPUT.password)
            setIcon(showPass ? <PasswordShow /> : <PasswordHide />)
        }
    }, [type, showPass])

    const onChangeInput = (e:any) => {
        if (parentChangeHandler) parentChangeHandler(e)
        if (onChange) onChange(e)
        form?.mutators?.handlerFieldValue?.({fieldName: name, fieldValue: e?.currentTarget?.value})
    }
    return (
        <div className={className}>
            <Input
                type={typeState}
                name={name}
                value={value?.toString()}
                label={label}
                onChange={onChangeInput}
                onFocus={onFocus}
                onBlur={onBlur}
                error={(touched && error) || ''}
                /*success={dirty && valid}*/
                validationRules={validationRules!}
                transformationRule={transformationRule!}
                disabled={disabled!}
                size={size}
                tooltip={tooltip}
                iconSuffix={icon}
                onClickIconPrefix={() => setShowPass(!showPass)}
            />
        </div>
    )
}
export default React.memo(InputForm)
