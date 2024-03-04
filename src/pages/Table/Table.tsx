import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global'

const Table = () => {
  console.log('############## Table')
  const dispatch = useDispatch()

  /**
   * DID MOUNT
   */
  useEffect(()=>{
    console.log(' DID MOUNT > Form()')
    const actionData:IGetTestData = {
      type: ActionKeys.GET_TEST_DATA,
      payload: {test: 'Table'}
    }
    dispatch(actionData)
    return ()=>{
      console.log(' UNMOUNT > Form()')
    }
  },[])
  return (
    <div>
      Table
    </div>
  )
}

export default Table
