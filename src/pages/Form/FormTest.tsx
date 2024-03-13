import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global.ts'
import { Typography } from '@atomaro/ui-kit'
import s from './FormTest.module.scss'
import { Input } from '../../components/pureComponents/UI'
import { Form } from '../../components'
import { WarningsType } from '../../components/pureComponents/Form/types.ts'

const FormTest = () => {
  console.log('############## FormTest()')
  const dispatch = useDispatch()

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
        Форма с всеми возможными компонентами ввода данных 2:
      </Typography>
      <div className={s.formcontent}>
        <Input />
        <Form
          callbackSubmit={handlerOnSubmit}
          callbackHandlerConfirmSubmit={handlerConfirmSubmit}
        >
          <div>Форма</div>
        </Form>
      </div>
    </div>
  )
}

export default FormTest
