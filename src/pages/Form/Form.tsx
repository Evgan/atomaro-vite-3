import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global'
import { Typography } from '@atomaro/ui-kit'


const Form = () => {
  console.log('############## Form()')
  const dispatch = useDispatch()

  /**
   * DID MOUNT
   */
  useEffect(()=>{
    console.log(' DID MOUNT > Form()')
    const actionData:IGetTestData = {
      type: ActionKeys.GET_TEST_DATA,
      payload: {test: 'Form'}
    }
    dispatch(actionData)
  },[])
  return (
    <div>
      <Typography  variant="heading-h3">
        Форма с всеми возможными компонентами ввода данных:
      </Typography>
    </div>
  )
}

export default Form
