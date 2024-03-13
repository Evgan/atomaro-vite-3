import { ITransformationRule, IValidationRules } from '../types.ts'
import { valueIsNotEmpty } from '../../../../helpers/conditionsHelpers'
import { HeadersTableType, HeaderTableType } from '../../../Tables/layouts/tableLayoutHelper'

import { TYPES_INPUT } from '../../constants'
import { FormType } from '../types'
import { BoolType } from '../../../../helpers/CommonTypes'
import InputField from '../formsFields/Input/InputField.tsx'
import InputForm from '../formsFields/Input/InputForm.tsx'

export const formFieldIsRequired = (id: string, headers: HeadersTableType): boolean => headers?.[id]?.nullable === 0
export const getFormFieldError = (id: string, headers: HeadersTableType): string => `Введите значение поля ${headers?.[id]?.name || id}`
export const getFormLabel = (id: string, headers: HeadersTableType): string => headers?.[id]?.name || id

export type WarningType = {
  fieldName: string,
  warningMsg: string
}
export type WarningsType = {
  [id: string]: WarningType
}

declare type ObjectType = {
  [id: string]: any
}
export const getErrorsValidate = (
  fields: string[],
  values: ObjectType,
  headers: HeadersTableType
): Record<string, string> => {
  const errors: ObjectType = {}
  fields.map(field => {
    if (formFieldIsRequired(field, headers) && !valueIsNotEmpty(values[field])) {
      errors[field] = getFormFieldError(field, headers)
    }
  })
  return errors
}

declare type CheckFormationDateType = {
  fieldsForCheck: string[],
  fields: string[],
  values: ObjectType,
  headers: HeadersTableType,
  errors: ObjectType,
  formatDate?: string,
}
/*export const checkFormationDate = ({
                                     fieldsForCheck,
                                     fields,
                                     values,
                                     headers,
                                     errors,
                                     formatDate = 'DD.MM.YYYY'
                                   }: CheckFormationDateType): Record<string, string> => {
  const result = {...errors}
  fieldsForCheck.map(field => {
    if (fields.includes(field) && !errors[field] && formFieldIsRequired(field, headers)) {
      const fieldValue: DatePickerType = values?.[field]
      const valueIsValidDate = fieldValue?.activeDate
      if (!valueIsValidDate) {
        result[field] = `Значение поля не соответствует формату: "${formatDate}"`
      }
    }
  })
  return result
}*/

const enum STEPPER_CONDITIONS {
  RAMGE = 'RANGE',
  MAX = 'MAX',
  MIN = 'MIN'
}

declare type GetErrorsMinValueStepperType = {
  value: number,
  maxValue?: number,
  minValue?: number
}
export const getErrorsStepper = ({
                                   value,
                                   maxValue,
                                   minValue
                                 }: GetErrorsMinValueStepperType): string => {
  const maxNotEmpty = valueIsNotEmpty(maxValue)
  const minNotEmpty = valueIsNotEmpty(minValue)
  let condition: keyof typeof STEPPER_CONDITIONS
  if (maxNotEmpty && minNotEmpty) {
    condition = 'RAMGE'
  } else if (maxNotEmpty) {
    condition = 'MAX'
  } else if (minNotEmpty) {
    condition = 'MIN'
  }
  // @ts-ignore
  switch (condition) {
    case 'RAMGE':
      if (value < minValue! || value > maxValue!) {
        return `Значение должно быть не менее ${minValue} и не более ${maxValue}`
      }
      break
    case 'MAX':
      if (value > maxValue!) {
        return `Значение не должно быть более ${maxValue}`
      }
      break
    case 'MIN':
      if (value < minValue!) {
        return `Значение не должно быть менее ${minValue}`
      }
      break
  }
  return ''
}

export const isDisabledFormItem = (mode: FormModeType, headerProps: HeaderTableType, isFetching: boolean): boolean => {
  if (mode === FormModes.EDITING && headerProps.editable === 0) {
    return true
  }
  return isFetching
}

export enum FIELDS_TYPE {
  INPUT = 'INPUT',
  INPUT_AMOUNT = 'INPUT_AMOUNT',
  TEXT_AREA = 'TEXT_AREA',
  SELECT = 'SELECT',
  MULTI_SELECT = 'MULTI_SELECT',
  SWITCH = 'SWITCH',
  STEPPER = 'STEPPER',
  DATE_PICKER = 'DATE_PICKER',
  FILE_PICKER = 'FILE_PICKER'
}

export type fieldsType = keyof typeof FIELDS_TYPE

export interface IItem<T, P> {
  readonly type: T,
  props?: P,
}

export type InputOptionsTyp = {
  disabled?: boolean,
  validationRules?: IValidationRules[],
  transformationRule?: ITransformationRule,
  hint?: string,
  info?: string,
  prefix?: string,
  type?: keyof typeof TYPES_INPUT
}

export interface IInput extends IItem<FIELDS_TYPE.INPUT, InputOptionsTyp> {
}

//
export type TextAreaOptionsTyp = {
  disabled?: boolean,
  hint?: string,
  info?: string,
}

export interface ITextArea extends IItem<FIELDS_TYPE.TEXT_AREA, TextAreaOptionsTyp> {
}

//
export type FilePickerOptionsTyp = {
  disabled?: boolean,
  hint?: string,
  accept?: string
}

export interface IFilePicker extends IItem<FIELDS_TYPE.FILE_PICKER, FilePickerOptionsTyp> {
}

//
export type InputAmountOptionsTyp = {
  disabled?: boolean,
  validationRules?: IValidationRules[],
  hint?: string,
  info?: string,
  maxlength?: number
}

export interface IInputAmount extends IItem<FIELDS_TYPE.INPUT_AMOUNT, InputAmountOptionsTyp> {
}

//
export type DatePickerOptionsTyp = {
  disabled?: boolean,
  hint?: string,
  info?: string,
  minDate?: Date,
  maxDate?: Date,
  disabledDates?: Date[],
  minYear?: number,
  maxYear?: number,
}

export interface IDatePicker extends IItem<FIELDS_TYPE.DATE_PICKER, DatePickerOptionsTyp> {
}

//
export type SelectOptionsTyp = {
  // options: OptionType[],
  optionsIsFetching?: boolean,
  info?: string,
  useInPortal?: boolean
  nullable?: BoolType
}

export interface ISelect extends IItem<FIELDS_TYPE.SELECT, SelectOptionsTyp> {
}

//
export type MultiSelectOptionsTyp = {
  // options: OptionType[],
  optionsIsFetching: boolean,
  showSelectAll?: boolean,
  autoHeight?: boolean,
  useInPortal?: boolean,
  info?: string
}

export interface IMultiSelect extends IItem<FIELDS_TYPE.MULTI_SELECT, MultiSelectOptionsTyp> {
}

//
export type SwitchOptionsTyp = {
  info?: string,
  switchVarValues?: { on: string, off: string }
}

export interface ISwitch extends IItem<FIELDS_TYPE.SWITCH, SwitchOptionsTyp> {
}

//
export interface IStepper extends IItem<FIELDS_TYPE.STEPPER, string> {
}

//
export type ItemType =
  IInput
  | IInputAmount
  | ISelect
  | IMultiSelect
  | ISwitch
  | IStepper
  | IDatePicker
  | ITextArea
  | IFilePicker

export enum FormModes {
  EDITING = 'EDITING',
  CREATION = 'CREATION',
  MASS_CREATION = 'MASS_CREATION',
  ADD = 'ADD'
}

export type FormModeType = keyof typeof FormModes

export type GetFormItemType = FormType & {
  mode: FormModeType,
  itemTypeData: ItemType,
  name: string,
  headerProps: HeaderTableType,
  isFetching: boolean
}

//-----------------------------
// export  interface IDynamicFieldProps <T, D> {
//     readonly type: T,
//     dynamicFieldProps?: D
// }
//
export type DynamicFieldPropsSelectTyp = {
  //options: OptionType[],
  isFetching: boolean
}
// export interface IDynamicFieldPropsSelect extends IDynamicFieldProps<FIELDS_TYPE.SELECT, DynamicFieldPropsSelectTyp>{}
//
export type DynamicFieldPropsType = DynamicFieldPropsSelectTyp
//-----------------------------
declare type FormItemIsShowType = {
  mode: FormModeType,
  header: HeaderTableType
}
export const formItemIsShow = ({
                                 mode,
                                 header
                               }: FormItemIsShowType): boolean => {
  if (mode === 'CREATION' || mode === 'ADD') {
    if (header.hasOwnProperty('visibleInAdd')) {
      return header.visibleInAdd === 1
    } else {
      return header.visible === 1
    }
  }
  return true
}

//-----------------------------
export type FormItemType = {
  headerName: string,
  header: HeaderTableType,
  isFetching?: boolean,
  mode?: FormModeType,
}
export const getFormItem = (
  {
    mode,
    itemTypeData,
    name,
    headerProps,
    isFetching,
    Field,
    useForm,
    //callbackHandlerChangeField
  }: GetFormItemType
): JSX.Element => {
  const label: string = `${headerProps.name} (${name})`
  switch (itemTypeData?.type) {
    case FIELDS_TYPE.INPUT: {
      const {
        validationRules,
        transformationRule,
        hint,
        type
      } = itemTypeData.props || {}
      return <InputField
        name={name}
        key={`FormItem_${name}`}
        label={label}
        validationRules={validationRules}
        transformationRule={transformationRule}
        hint={hint}
        component={InputForm}
        type={type || TYPES_INPUT.text}
        disabled={itemTypeData?.props?.disabled || isDisabledFormItem(mode, headerProps, isFetching)}
        Field={Field}
        useForm={useForm}
      />
    }
    /*case FIELDS_TYPE.FILE_PICKER: {
      const {
        hint,
        accept,
        disabled
      } = itemTypeData.props || {}
      return (
        FilePickerField({
          name,
          key: `FormItem_${name}`,
          label,
          hint,
          accept,
          component: FilePickerForm,
          disabled: disabled || isDisabledFormItem(mode, name, headerProps, isFetching),
          Field,
          useForm,
          callbackHandlerChangeField
        })
      )
    }
    case FIELDS_TYPE.TEXT_AREA: {
      const {
        hint
      } = itemTypeData.props || {}
      return (
        TextAreaField({
          name,
          key: `FormItem_${name}`,
          label,
          hint,
          component: TextAreaForm,
          disabled: itemTypeData?.props?.disabled || isDisabledFormItem(mode, name, headerProps, isFetching),
          Field,
          useForm
        })
      )
    }
    case FIELDS_TYPE.DATE_PICKER:
      const {
        hint,
        maxDate,
        minDate,
        disabledDates,
        maxYear,
        minYear
      } = itemTypeData.props || {}
      return (
        DatePickerField({
          name,
          key: `FormItem_${name}`,
          label,
          hint,
          component: DatePickerForm,
          disabled: isDisabledFormItem(mode, name, headerProps, isFetching),
          Field,
          useForm,
          maxDate,
          minDate,
          maxYear,
          minYear,
          disabledDates
        })
      )
    case FIELDS_TYPE.SELECT: {
      const {
        options,
        optionsIsFetching,
        useInPortal,
        nullable
      } = itemTypeData?.props || {}

      // disabledField это кастыль на случай когда options после того как форма отрендерилась
      // (тип селект зависит от того какое значение вбили в другое поле формы)
      const nameField = !options ? 'disabledField' : name

      return (
        SelectField({
          name: nameField,
          key: `FormItem_${name}`,
          label,
          component: SelectForm,
          disabled: isDisabledFormItem(mode, name, headerProps, isFetching! || optionsIsFetching!),
          options: nullable && options
            ? [{key: '', value: 'пустое значение'}, ...options]
            : options!,
          showPreloader: isFetching || optionsIsFetching,
          useInPortal,
          Field,
          useForm
        })
      )
    }
    case FIELDS_TYPE.MULTI_SELECT: {
      const {
        options,
        optionsIsFetching,
        showSelectAll,
        info,
        useInPortal,
        autoHeight
      } = itemTypeData?.props || {}

      // disabledField это кастыль на случай когда options после того как форма отрендерилась
      // (тип селект зависит от того какое значение вбили в другое поле формы)
      const nameField = !options ? 'disabledField' : name

      return (
        MultiSelectField({
          name: nameField,
          key: `FormItem_${name}`,
          label,
          component: MultiSelectForm,
          disabled: isDisabledFormItem(mode, name, headerProps, isFetching! || optionsIsFetching!),
          options: options!,
          showPreloader: isFetching || optionsIsFetching,
          Field,
          useForm,
          showSelectAll,
          autoHeight,
          useInPortal,
          info: info!
        })
      )
    }

    case FIELDS_TYPE.SWITCH: {
      const {
        switchVarValues
      } = itemTypeData?.props || {}
      return SwitchField({
        name,
        key: `FormItem_${name}`,
        label,
        component: SwitchForm,
        disabled: isDisabledFormItem(mode, name, headerProps, isFetching),
        switchVarValues: switchVarValues || {on: 'Y', off: 'N'},
        Field,
        useForm
      })
    }

    case FIELDS_TYPE.STEPPER: {
      return InputNumberStepperField({
        name,
        key: `FormItem_${name}`,
        label,
        component: InputNumberStepperForm,
        disabled: isDisabledFormItem(mode, name, headerProps, isFetching),
        Field,
        useForm
      })
    }
    case FIELDS_TYPE.INPUT_AMOUNT: {
      const {
        hint,
        validationRules,
        maxlength
        //info
      } = itemTypeData.props || {}
      return (
        InputAmountField({
          name,
          key: `FormItem_${name}`,
          label,
          validationRules,
          hint: hint,
          component: InputAmountForm,
          type: TYPES_INPUT.text,
          maxlength: maxlength!,
          disabled: itemTypeData?.props?.disabled || isDisabledFormItem(mode, name, headerProps, isFetching),
          Field,
          useForm
        })
      )
    }*/
  }
  return null!
}
