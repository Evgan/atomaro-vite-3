import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global.ts'
import { Typography } from '@atomaro/ui-kit'
import s from './FormTest.module.scss'
import { Input } from '../../components/pureComponents/UI'
import { Form } from '../../components'
import { FormFieldsPropsType, FormModeType, WarningsType } from '../../components/pureComponents/Form/formTypes.ts'
import { formFieldIsShow } from '../../components/pureComponents/Form/formsHelper.ts'
import FormFieldTest from './FormFieldTest/FormFieldTest.tsx'
import validate from './validate.ts'

const testFormFieldsProps:FormFieldsPropsType = {
  testInput: {
    name: 'Тест Инпута',
    default: "default значение",
    nullable: 0,
    visibleInAdd: 1,
  },
  testInput2: {
    name: 'Тест Инпута 2',
    default: "default значение 2",
    nullable: 1,
    visibleInAdd: 1,
  }
}

export type FormTestDataType = {
  testInput:string,
  testInput2:string,
  testSelector:string,
}
export type FormTestDataTypeKeys = Extract<keyof FormTestDataType, string>

const FormTest = () => {
  console.log('############## FormTest()')
  const dispatch = useDispatch()
  const mode: FormModeType = 'ADD'

  /**
   * DID MOUNT
   */
  useEffect(()=>{
    const actionData:IGetTestData = {
      type: ActionKeys.GET_TEST_DATA,
      payload: {test: 'Form'}
    }
    dispatch(actionData)
  },[])
  /**
   *
   */
  const handlerOnSubmit = useCallback((formData: object) => {
    console.log(' >> handlerOnSubmit()')
    console.log(' > formData:')
    console.log(formData)
  }, [])
  /**
   *
   */
  const handlerConfirmSubmit = useCallback((warnings: WarningsType, formData: object) => {
    console.log(' >> handlerOnSubmit()')
    console.log(' > formData:')
    console.log(formData)
    console.log(' > warnings:')
    console.log(warnings)
    /*
    const actionData: IShowModal = {
            type: ActionKeysModals.SHOW_MODAL,
            payload: {
                name: MODALS_ID.CONFIRM_SUBMIT_FORM,
                withoutClose: true,
                data: {
                    [MODALS_ID.CONFIRM_SUBMIT_FORM]: {
                        warnings: warnings,
                        callBack: handlerOnSubmit,
                        formData: formData
                    }
                }
            }
        }
        dispatch(actionData)
     */
  }, [handlerOnSubmit])
  /**
   *
   */
  return (
    <div>
      <Typography  variant="heading-h3">
        Форма с всеми возможными компонентами ввода данных:
      </Typography>
      <div className={s.formcontent2}>
        <Input
          label='Наличие таблицы в GP'
          //placeholder='Наличие таблицы в GP'
          value='Пример'
          size='l'
          className={s.inputForForm}
        />
        <Form
          callbackSubmit={handlerOnSubmit}
          callbackHandlerConfirmSubmit={handlerConfirmSubmit}
          validate={(values: FormTestDataType) => validate(values, testFormFieldsProps, mode)}
        >
          <div>
            {testFormFieldsProps && Object.entries(testFormFieldsProps).map(([fielfId, formFieldProps]) => {
              if(!formFieldProps) {
                return null
              }
              const dontShowFormField: boolean = !formFieldIsShow ({mode, formFieldProps})
              if(dontShowFormField) {
                return null
              }
              return (
                <div key={`formField_${fielfId}`}>
                  <FormFieldTest 
                    key='FieldForm_testInput'
                    fieldId={fielfId}
                    mode={mode}
                    formFieldProps={formFieldProps}
                    isFetching={false}
                  />
                </div>
              )
            })}
          </div>
        </Form>
      </div>
    </div>
  )
}

export default FormTest
