import React  from 'react'
import { FunctionButton } from '@atomaro/ui-kit'
import { IFunctionButtonProps } from '@atomaro/ui-kit/components/Button/FunctionButton/types'
import s from './FunctionButtonHOC.module.scss'
export interface IFunctionButton extends IFunctionButtonProps{}
const FunctionButtonHOC = (props:IFunctionButton) => {
  return (
    <FunctionButton
      {...props}
      className={s.container}
    />
  )
}

export default FunctionButtonHOC
