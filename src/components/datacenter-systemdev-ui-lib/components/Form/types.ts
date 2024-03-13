
export declare type FilePickerDataType = {
    file: File
}

export declare type HandlerChangeFieldType = (fieldName: string, fieldValue: string | number | FilePickerDataType) => void

export declare type FormType = {
    Field:any,
    useForm:any,
    callbackHandlerChangeField?: HandlerChangeFieldType
}

export declare type ItemFormType = {
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
