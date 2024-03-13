import { SegmentedMenu as SegmentedMenu_dcSdLib  } from '../../datacenter-systemdev-ui-lib/index'
import { ISegmentedMenu as ISegmentedMenu_dcSdLib } from '../../datacenter-systemdev-ui-lib/types'
import s from './SegmentedMenu.module.scss'
declare interface ISegmentedMenu extends ISegmentedMenu_dcSdLib {}
const SegmentedMenu = (props:ISegmentedMenu) => {
  return (
    <div className={s.container}>
        <SegmentedMenu_dcSdLib
          {...props}
        />
    </div>
  )
}
export default SegmentedMenu
