import { SegmentedControl } from '../../../datacenter-systemdev-ui-lib/UI'
import {
  ISegmentedControl as ISegmentedControl_dcSdLib,
  ISegment as ISegment_dcSdLib
} from '../../../datacenter-systemdev-ui-lib/types'

export interface ISegment extends ISegment_dcSdLib {}
export interface ISegmentedControl extends ISegmentedControl_dcSdLib {}

const SegmentedControlHOC = (props:ISegmentedControl) => {
  return (
    <SegmentedControl
      {...props}
    />
  )
}

export default SegmentedControlHOC
