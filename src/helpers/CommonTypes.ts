import { UnknownAction } from 'redux'
import { KeysToOptionType } from '../components/datacenter-systemdev-ui-lib/types'
/**
 *
 */
export interface IAction<T extends string,P> extends UnknownAction {
    type: T,
    payload?: P
}

// const a: KeysToOptionType

export type {
    KeysToOptionType
}
