import React from 'react'
import { SegmentedControl } from '../../../datacenter-systemdev-ui-lib'
import {
  ISegmentedControlHOC as ISegmentedControl_dcSdLib,
  ISegment as ISegment_dcSdLib
} from '../../../datacenter-systemdev-ui-lib/components/UI/SegmentedControl/SegmentedControlHOC'

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
