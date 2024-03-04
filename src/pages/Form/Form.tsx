import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global'


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
      Form
    </div>
  )
}

export default Form
