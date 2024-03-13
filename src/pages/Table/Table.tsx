import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionKeys, IGetTestData } from '../../store/ducks/global'

const Table = () => {
  const dispatch = useDispatch()
  /**
   * DID MOUNT
   */
  useEffect(()=>{
    console.log(' DID MOUNT > Table()')
    const actionData:IGetTestData = {
      type: ActionKeys.GET_TEST_DATA,
      payload: {test: 'Table'}
    }
    dispatch(actionData)
    return ()=>{
      console.log(' UNMOUNT > Table()')
    }
  },[])
  return (
    <div>
      Table 2
    </div>
  )
}

export default Table
