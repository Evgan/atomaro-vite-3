import React from 'react'
import { Segment } from '@atomaro/ui-kit'
import { ISegment as ISegment_atomaro } from '@atomaro/ui-kit/components/SegmentedControl/Segment/types'

export interface ISegment extends ISegment_atomaro {
  classNames?: string
}
const SegmentHOC = ({
  classNames,
  ...rest
}: ISegment) => {
  return (
    <Segment
      {...rest}
      className={classNames}
    />

  )
}
export default SegmentHOC
