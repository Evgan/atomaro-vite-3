import { FunctionButton } from '../../../../datacenter-systemdev-ui-lib/UI'
import {
  IFunctionButton
} from '../../../../datacenter-systemdev-ui-lib/types'
declare interface IFunctionButtonHOC extends IFunctionButton{}
const FunctionButtonHOC = (props:IFunctionButtonHOC) => {
  return (
    <FunctionButton
      {...props}
    />
  )
}

export default FunctionButtonHOC
