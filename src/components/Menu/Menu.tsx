import React, { useCallback, createContext, useContext, useRef, MutableRefObject } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { useStableNavigate } from '../../App/StableNavigateContext'

const StableNavigateContext =
  createContext<MutableRefObject<NavigateFunction> | null>(null)

declare interface IMenuItem {
  label:string,
  url:string
}
const MenuItem = ({
                    label,
                    url
                  }:IMenuItem) => {
  console.log('############## MenuItem() > ', label)
  const navigate = useStableNavigate();
  const handlerOnClick = useCallback(()=>{
    navigate(url)
  },[])
  return (
    <div onClick={handlerOnClick}>
      {label}
    </div>
  )
}

const Menu = () => {
  console.log('############## Menu()')
  return (
    <div>
      <MenuItem key={'form'} label={'Форма'} url={'/form'} />
      <MenuItem key={'table'} label={'Таблица'} url={'/table'} />
    </div>
  )
}

export default React.memo(Menu)
