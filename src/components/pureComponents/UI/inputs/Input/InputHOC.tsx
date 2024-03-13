//import s from './InputHOC.module.scss'
import { Input } from '../../../../datacenter-systemdev-ui-lib/UI'
import { IInput as IInput_dcSdLib } from '../../../../datacenter-systemdev-ui-lib/types'


declare interface IInput extends IInput_dcSdLib {}

const InputHOC = (props: IInput) => {
  return (
    <Input
      {...props}
    />
  )
}

export default InputHOC
