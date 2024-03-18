import { FormFieldsPropsType, FormModeType } from '../../components/pureComponents/Form/formTypes.ts'
import { getErrorsValidate } from '../../components/pureComponents/Form/formsHelper.ts'
import { KeysToOptionType } from "../../helpers/CommonTypes"
import { FormTestDataTypeKeys, FormTestDataType } from "./FormTest"

export default function (
    values: FormTestDataType,
    formFieldsProps: FormFieldsPropsType,
    mode: FormModeType,
) {

    console.log('VVVVVVVVVVVVVVV FORM TEST');
    console.log(' > values:');
    console.log(values);
    
    

    let fields: FormTestDataTypeKeys[] = []
    if(mode === 'EDITING') {
        fields = [
            'testInput'
        ]
    } else {
        fields = [
            'testInput',
            'testInput2'
        ]
    }

    const errors: KeysToOptionType<FormTestDataTypeKeys, string> = getErrorsValidate(fields!, values, formFieldsProps)
    console.log(' > errors:');
    console.log(errors);
    
    return errors
}