import React  from 'react'
import { FunctionButton } from '@atomaro/ui-kit'
import { IFunctionButtonProps } from '@atomaro/ui-kit/components/Button/FunctionButton/types'
import s from './FunctionButtonHOC.module.scss'
export interface IFunctionButtonHOC extends IFunctionButtonProps{}
const FunctionButtonHOC:React.FC<IFunctionButtonHOC> = (props) => {
  return (
    <FunctionButton
      {...props}
      className={s.container}
    />
  )
}

export default FunctionButtonHOC
