import { UnknownAction } from 'redux'
/**
 *
 */
export interface IAction<T extends string,P> extends UnknownAction {
    type: T,
    payload?: P
}
