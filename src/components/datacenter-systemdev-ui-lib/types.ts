import { ISegmentHOC as ISegment } from "./src/UI/Segment/SegmentHOC"
import { ISegmentedControlHOC as ISegmentedControl } from "./src/UI/SegmentedControl/SegmentedControlHOC"
import { ITooltipHOC as ITooltip} from "./src/UI/Tooltip/TooltipHOC"
import { IFunctionButtonHOC as IFunctionButton } from "./src/UI/buttons/FunctionButton/FunctionButtonHOC"
import { IInputHOC as IInput } from "./src/UI/inputs/Input/InputHOC"
import { IFormHOC as IForm } from "./src/components/Form/FormHOC"
import { WarningsType } from "./src/components/Form/formHelpers/formsHelper"
import { ISegmentedMenu } from "./src/components/menus/SegmentedMenu/SegmentedMenu"
// const TEST:WarningsType
export type {
  // UI Types
  IFunctionButton,
  IInput,
  ISegment,
  ISegmentedControl,
  ITooltip,
  // components types
  ISegmentedMenu,
  IForm,
  WarningsType
}