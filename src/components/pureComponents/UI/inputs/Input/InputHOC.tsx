import { Input } from '@atomaro/ui-kit'
import s from './InputHOC.module.scss'
import { IInputProps } from '@atomaro/ui-kit/components/Input/types'
import React from 'react'


declare interface IInputHOC extends React.ForwardRefExoticComponent<IInputProps & React.RefAttributes<HTMLInputElement>>{

}

const InputHOC = (props:IInputHOC) => {
  return (
    <Input
      {...props}
    />
  )
}

export default InputHOC
