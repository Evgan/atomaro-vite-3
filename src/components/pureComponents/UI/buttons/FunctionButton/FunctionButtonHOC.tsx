import React  from 'react'
import { FunctionButton } from '../../../../datacenter-systemdev-ui-lib'
import {
  IFunctionButton
} from '../../../../datacenter-systemdev-ui-lib/components/UI/buttons/FunctionButton/FunctionButtonHOC'
declare interface IFunctionButtonHOC extends IFunctionButton{}
const FunctionButtonHOC = (props:IFunctionButtonHOC) => {
  return (
    <FunctionButton
      {...props}
    />
  )
}

export default FunctionButtonHOC
