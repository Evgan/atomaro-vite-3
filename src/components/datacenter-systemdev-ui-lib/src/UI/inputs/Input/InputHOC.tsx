import { Input } from '@atomaro/ui-kit'
import s from './InputHOC.module.scss'
import { IInputProps as IInputProps_atomaro } from '@atomaro/ui-kit/components/Input/types'
import { Tooltip } from '../../index'


export interface IInputHOC extends IInputProps_atomaro{
  tooltip?: string
  classNameInputWrapper?: string
}

const InputHOC = ({
  tooltip,
  classNameInputWrapper,
  ...rest
}:IInputHOC) => {
  return (
    <div className={s.container}>
      {tooltip && (
        <Tooltip>{tooltip}</Tooltip>
      )}
      <div className={classNameInputWrapper}>
        <Input
          {...rest}
        />
      </div>
    </div>
  )
}

export default InputHOC
