import { Tooltip } from '@atomaro/ui-kit'
import { ITooltipProps as ITooltipProps_atomaro} from '@atomaro/ui-kit/components/Tooltip/types'

export interface ITooltipHOC extends ITooltipProps_atomaro{}

const TooltipHOC = ({
    children,
    ...rest
}:ITooltipHOC) => <Tooltip {...rest}>{children}</Tooltip>
export default TooltipHOC