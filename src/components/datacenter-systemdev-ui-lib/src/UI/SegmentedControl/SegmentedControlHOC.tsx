import { SegmentedControl } from '@atomaro/ui-kit'
import { ISegmentedControl as ISegmentedControl_atomaro} from '@atomaro/ui-kit/components/SegmentedControl/types'
import { Segment } from '../index'
import { ISegmentHOC } from '../Segment/SegmentHOC'

export interface ISegmentedControlHOC extends Omit<ISegmentedControl_atomaro, 'children'>{
  segmentsOptions: ISegmentHOC[],
  startIndex?: string,
  classNames?:string,
  segmentClassNames?:string
}
const SegmentedControlHOC = ({
  segmentsOptions,
  startIndex,
  classNames,
  segmentClassNames,
  ...rest
}: ISegmentedControlHOC) => {
  return (
    <SegmentedControl
      {...rest}
      value={startIndex}
      className={classNames}
    >
      {segmentsOptions && segmentsOptions.map((props) =>
        <Segment
          {...props}
          key={`segment_${props.index}`}
          classNames={segmentClassNames!}
        />
      )}
    </SegmentedControl>
  )
}

export default SegmentedControlHOC
