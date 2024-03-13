import { IForm as IForm_dcSdLib } from '../../datacenter-systemdev-ui-lib/types.ts'
import { Form as Form_dcSdLib} from '../../datacenter-systemdev-ui-lib'

declare interface IForm extends IForm_dcSdLib {}
const FormHOC = (props:IForm) => {
  return (
    <Form_dcSdLib
      {...props}
    />
  )
}
export default FormHOC
