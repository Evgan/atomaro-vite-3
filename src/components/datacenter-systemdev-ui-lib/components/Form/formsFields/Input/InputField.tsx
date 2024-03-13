import React from 'react'
import {ITransformationRule, IValidationRules} from '../../../../Form/types.ts'
import {FormType} from '../../../../Form/types.ts'

export interface IInputField<FormKeysType> extends FormType {
    name: FormKeysType,
    label?: string,
    component: React.FC<any>,
    type?: string,
    disabled?: boolean,
    key?: string,
    className?: string,
    tooltip?: string,
    validationRules?:IValidationRules[],
    transformationRule?:ITransformationRule,
    hint?: string,
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
