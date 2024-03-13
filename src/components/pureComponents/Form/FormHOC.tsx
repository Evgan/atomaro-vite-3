import { IForm as IForm_dcSdLib } from '../../datacenter-systemdev-ui-lib/components/Form/FormHOC.tsx'
import { Form as Form_dcSdLib} from '../../datacenter-systemdev-ui-lib'

declare interface IForm extends IForm_dcSdLib {}
const Form = (props:IForm) => {
  return (
    <Form_dcSdLib
      {...props}
    />
  )
}
export default Form
