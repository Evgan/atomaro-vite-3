import { BoolType } from "../../helpers/CommonTypes"

export declare type FilePickerDataType = {
    file: File
}

export declare type HandlerChangeFieldType = (fieldName: string, fieldValue: string | number | FilePickerDataType) => void

export declare type FormType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Field:any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useForm:any,
    callbackHandlerChangeField?: HandlerChangeFieldType
}

export declare type ItemFormType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useForm:any,
    callbackHandlerChangeField?: HandlerChangeFieldType
}

export interface IValidationRules {
    error?: string,
    validate: (inputValue: string) => boolean;
}
export interface ITransformationRule {
    transform: (inputValue?: string) => string;
    onBlurTransform?: (inputValue: string) => string;
}
