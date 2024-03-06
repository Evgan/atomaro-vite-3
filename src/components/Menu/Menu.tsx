import React, { useCallback, CSSProperties, useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'


import { useStableNavigate } from '../../hooks/StableNavigateContext'
import { ISegment } from '../pureComponents/UI/SegmentedControl/SegmentedControlHOC'
import SegmentedMenu from '../menus/SegmentedMenu/SegmentedMenu'

import s from './MenuItem.module.scss'
import { usePathname } from '../../hooks/usePathname'
import { useStableLocation } from '../../hooks/StableLocationContext'

declare type MenuOptionType = {
  index: string,
  label: string,
  url: string
}
const menuOptions: { [index: string]: MenuOptionType } = {
  '0': {index: '0', label: 'Форма', url: '/form'},
  '1': {index: '1', label: 'Таблица', url: '/table'}
}
const getMenuItemOptionByUrl = (url:string):MenuOptionType => {
  const menuItemOption: MenuOptionType = Object.values(menuOptions).find(item => item.url === url)
  return menuItemOption
}
const segmentsOptions: ISegment[] = Object.values(menuOptions).map(item => ({index: item.index, label: item.label}))
declare interface IMenuItem {
  label:string,
  url:string
}
const Menu = () => {
  console.log('############## Menu()')
  const navigate = useStableNavigate();
  const location = useStableLocation ()

  const [startMenuOption, setStartMenuOption] = useState<string>()
  useEffect(()=>{
    const menuItemOption: MenuOptionType = getMenuItemOptionByUrl(location.pathname)
    if (menuItemOption) {
      setStartMenuOption(menuItemOption.index)
    }
  },[])
  const handlerOnChange = useCallback((index: string)=>{
    const {url} = menuOptions?.[index] || {}
    if(url?.length > 0){
      navigate(url)
    }
  },[])
  return (
    <div className={s.container}>
      <SegmentedMenu
        startIndex={startMenuOption}
        segmentsOptions={segmentsOptions}
        onChange={handlerOnChange}
      />
    </div>
  )
}

export default React.memo(Menu)
