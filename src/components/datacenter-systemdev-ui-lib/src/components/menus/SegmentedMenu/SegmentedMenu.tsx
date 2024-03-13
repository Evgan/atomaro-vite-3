import React from 'react'
import { ISegmentedControlHOC } from '../../../UI/SegmentedControl/SegmentedControlHOC'
import { SegmentedControl } from '../../../UI'
import s from './SegmentedMenu.module.scss'
export interface ISegmentedMenu extends ISegmentedControlHOC {}
const SegmentedMenu:React.FC<ISegmentedMenu> = (props) => {
  return (
    <div className={s.container}>
        <SegmentedControl
          {...props}
          classNames={s.segmentedControl}
          segmentClassNames={s.segment}
        />
    </div>
  )
}
export default SegmentedMenu
