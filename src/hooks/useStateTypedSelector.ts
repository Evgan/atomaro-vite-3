import {TypedUseSelectorHook, useSelector} from "react-redux"
import { RootStateType } from "../store"
// что бы в компоненте получая стейт через useSelector, это стейт понимал какие у нас типы у рутстейта
export const useStateTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector