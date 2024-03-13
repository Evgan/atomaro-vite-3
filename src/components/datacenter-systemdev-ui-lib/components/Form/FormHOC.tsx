import { useCallback, useState } from 'react'
import { Form, FormProps } from 'react-final-form'
import { WarningsType } from './formHelpers/formsHelper'
import setFieldData from "final-form-set-field-data";
import arrayMutators from 'final-form-arrays'
import { valueIsNotEmpty } from '../../../helpers/conditionsHelpers'

declare interface IFormHOC extends Omit<FormProps, 'onSubmit'>{
  callbackSubmit: (values: object) => void,
  callbackHandlerConfirmSubmit?: (warnings: WarningsType, values: object) => void,
  callbackHandlerFormField?: (args:any, state:any, utils:any) => void,
  getWarnings?: (values: object) => WarningsType
}
const FormHOC = ({
  callbackSubmit,
  callbackHandlerConfirmSubmit,
  callbackHandlerFormField,
  children,
  getWarnings,
  ...rest
}:IFormHOC) => {
  const [warnings, setWarning] = useState<WarningsType>()
  /**
   *
   */
  const handlerFormField = (args:any, state:any, utils:any) => {
    const {form} = args[0] || {}
    if(callbackHandlerFormField) {
      callbackHandlerFormField(args, state, utils)
    }
    if(getWarnings) {
      const warningsNew = getWarnings(state?.formState?.values)
      const warningsBefore = {...warnings}
      const warningsNewKeys: string[] = Object.keys(warningsNew)
      Object.keys(warningsBefore).map(fieldId => {
        const removeWarn: boolean = !warningsNewKeys.includes(fieldId)
        if(removeWarn) {
          form?.mutators?.setFieldData?.(fieldId, {warning: ''})
        }
      })
      Object.entries(warningsNew).map(([fieldId, warning]) => {
        form?.mutators?.setFieldData?.(fieldId, {warning: warning.warningMsg})
      })
      setWarning(warningsNew)
    }
  }
  /**
   *
   */
  const handlerOnSubmit = useCallback((values: any) => {
    if(valueIsNotEmpty(warnings)) {
      if(callbackHandlerConfirmSubmit) {
        callbackHandlerConfirmSubmit(warnings!, values)
      }
    } else if (callbackSubmit) {
      callbackSubmit(values)
    }
  }, [warnings])
  /**
   *
   */
  return (
    <Form
      {...rest}
      onSubmit={values => {
        handlerOnSubmit(values)
      }}
      mutators={{
        handlerFieldValue:  (args, state, utils) => {
          handlerFormField(args, state, utils)
        },
        setFieldData,
        ...arrayMutators
      }}
    >
      {({
          handleSubmit,
        }) => {
        return(
          <form
            onSubmit={handleSubmit}
          >
            <>
              {children}
            </>
          </form>
        )
      }}
    </Form>
  )
}

export default FormHOC
