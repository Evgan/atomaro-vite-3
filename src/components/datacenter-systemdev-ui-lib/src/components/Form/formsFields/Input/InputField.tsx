import React from 'react'
import {ITransformationRule, IValidationRules} from '../../types.ts'
import {FormType} from '../../types.ts'

export interface IInputField<FormKeysType> extends FormType {
    name: FormKeysType,
    label?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>,
    type?: string,
    disabled?: boolean,
    key?: string,
    className?: string,
    tooltip?: string,
    validationRules?:IValidationRules[],
    transformationRule?:ITransformationRule,
    hint?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mask?:any,
}


const InputField = <FormKeysType extends string>(
    {
        name,
        label,
        component,
        type,
        disabled,
        key,
        className,
        tooltip,
        validationRules,
        transformationRule,
        hint,
        mask,
        Field,
        useForm
    }:IInputField<FormKeysType>
) => {
    return(
        <Field
            key={key}
            name={name}
            component={component}
            label={label}
            type={type}
            disabled={disabled}
            className={className}
            tooltip={tooltip}
            validationRules={validationRules}
            transformationRule={transformationRule}
            hint={hint}
            mask={mask}
            useForm={useForm}
        />
    )
}

export default React.memo(InputField) as typeof InputField
