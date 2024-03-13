import { Segment } from '@atomaro/ui-kit'
import { ISegment as ISegment_atomaro } from '@atomaro/ui-kit/components/SegmentedControl/Segment/types'

export interface ISegmentHOC extends ISegment_atomaro {
  classNames?: string
}
const SegmentHOC = ({
  classNames,
  ...rest
}: ISegmentHOC) => {
  return (
    <Segment
      {...rest}
      className={classNames}
    />

  )
}
export default SegmentHOC
