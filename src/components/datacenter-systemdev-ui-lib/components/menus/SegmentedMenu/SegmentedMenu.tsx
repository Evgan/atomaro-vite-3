import React from 'react'
import { ISegment } from '../../UI/SegmentedControl/SegmentedControlHOC'
import { SegmentedControl } from '../../UI'
import s from './SegmentedMenu.module.scss'
export interface ISegmentedMenu extends ISegment {}
const SegmentedMenu = (props:ISegmentedMenu) => {
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
