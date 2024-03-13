import { Input } from '@atomaro/ui-kit'
//import s from './InputHOC.module.scss'
import { IInputProps as IInputProps_atomaro } from '@atomaro/ui-kit/components/Input/types'
import { Tooltip } from '../../index'


export interface IInputHOC extends IInputProps_atomaro{
  tooltip?: string
}

const InputHOC = ({
  tooltip,
  ...rest
}:IInputHOC) => {
  return (
    <div>
      {tooltip && (
        <Tooltip>{tooltip}</Tooltip>
      )}
      <Input
        {...rest}
      />
    </div>
  )
}

export default InputHOC
