import React, { useEffect, useState } from "react"
import { Field, useForm } from 'react-final-form'

import { 
    FIELDS_TYPE,
    getFormField
} from "../../../components/pureComponents/Form/formsHelper"
import { 
    FormFieldDataType, 
    FormFieldType, 
    IFormFieldInput, 
} from "../../../components/pureComponents/Form/formTypes"
import { FormTestDataTypeKeys } from "../FormTest"
declare interface IFieldFormTest extends FormFieldType {}
const FieldFormTest = React.memo(({
    fieldId,
    mode,
    formFieldProps,
    isFetching
}:IFieldFormTest) => {
    const [formFieldData, setFormFieldData] = useState<FormFieldDataType>()
    /**
     * 
     */
    useEffect(()=>{
        switch (fieldId as FormTestDataTypeKeys){
            case "testInput":
            default:{
                const fieldInput: IFormFieldInput = {
                    type: FIELDS_TYPE.INPUT
                }
                setFormFieldData(fieldInput)
            }
            break;
        }
    }, [fieldId])
    /**
     * 
     */
    return(
        <>
            {formFieldData && (
                getFormField({
                    mode: mode!,
                    formFieldData: formFieldData,
                    fieldId: fieldId,
                    formFieldProps: formFieldProps,
                    isFetching: isFetching!,
                    Field,
                    useForm
                })
            )}
        </>
    )
})
export default FieldFormTest