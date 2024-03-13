import { useCallback } from 'react'
import { useStableNavigate } from '../../hooks/StableNavigateContext'
import { ISegment } from '../pureComponents/UI/SegmentedControl/SegmentedControlHOC'
import SegmentedMenu from '../menus/SegmentedMenu/SegmentedMenu'

import s from './MenuItem.module.scss'
import { useStableLocation } from '../../hooks/StableLocationContext'
// import { useStateTypedSelector } from '../../hooks/useStateTypedSelector'

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
  return Object.values(menuOptions).find(item => item.url === url)!
}
const segmentsOptions: ISegment[] = Object.values(menuOptions).map(item => ({index: item.index, label: item.label}))
const Menu = () => {
  const navigate = useStableNavigate()
  const location = useStableLocation ()
  // const activatedMenuItem = useStateTypedSelector(state => state.global.activatedMenuItem)
  //const [startMenuOption, setStartMenuOption] = useState<string>()
  const startMenuOption:string = getMenuItemOptionByUrl(location.pathname)?.index
  /**
   * DID MOUNT
   */
 /*  useEffect(()=>{
    const menuItemOption: MenuOptionType = getMenuItemOptionByUrl(location.pathname)
    if (menuItemOption) {
      setStartMenuOption(menuItemOption.index)
    }
  },[]) */
  /**
   *
   */
  /* useEffect(()=>{
    console.log(' DID CHANGE: activatedMenuItem = ', activatedMenuItem)
  },[activatedMenuItem]) */
  /**
   *
   */
  const handlerOnChange = useCallback((index: string)=>{
    const {url} = menuOptions?.[index] || {}
    if(url?.length > 0){
      navigate(url)
    }
  },[])
  /**
   *
   */
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

export default Menu
