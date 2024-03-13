import {put, takeLatest} from 'redux-saga/effects'
import { IAction } from '../../helpers/CommonTypes'

export enum ActionKeys {
  SET_ACTIVATED_MENU_ITEM = 'SET_ACTIVATED_MENU_ITEM_global',
  SET_ACTIVATED_MENU_ITEM_SUCCESS = 'SET_ACTIVATED_MENU_ITEM_SUCCESS_global',
  GET_TEST_DATA='GET_TEST_DATA_global'
}

export const initialState = {
  activatedMenuItem: ''
}


/**
 * SET_ACTIVATED_MENU_ITEM
 */
export type SetActivatedMenuItemType = {
  menuItemLabel: string
}
export interface ISetActivatedMenuItem extends IAction<ActionKeys.SET_ACTIVATED_MENU_ITEM, SetActivatedMenuItemType> {}
export interface ISetActivatedMenuItemSuccess extends IAction<ActionKeys.SET_ACTIVATED_MENU_ITEM_SUCCESS, SetActivatedMenuItemType> {}

/**
 * GET_TEST_DATA
 */
export type GetTestDataType = {
  test:string
}
export interface IGetTestData extends IAction<ActionKeys.GET_TEST_DATA, GetTestDataType> {}

/**
 *  STATE & ACTIONS TYPES
 */
export type StateType = typeof initialState
export type ActionsType = ISetActivatedMenuItem | IGetTestData | ISetActivatedMenuItemSuccess
/**
 * reducer
 */
export default function reducer(state: StateType = initialState, action: ActionsType): StateType {
  switch (action.type) {
    case ActionKeys.SET_ACTIVATED_MENU_ITEM:{
      return {
        ...state,
        activatedMenuItem: action.payload?.menuItemLabel
      } as StateType
    }
    case ActionKeys.SET_ACTIVATED_MENU_ITEM_SUCCESS:{
      return {
        ...state,
        activatedMenuItem: action.payload?.menuItemLabel
      } as StateType
    }
    default:
      return state
  }
}
/**
 * sagas
 */
function* getTestDataSaga(props: IGetTestData){
  try {
    const {test} = props.payload || {}
    yield put({
      type: ActionKeys.SET_ACTIVATED_MENU_ITEM_SUCCESS,
      payload: {menuItemLabel: test}
    })
  } catch (e: unknown) {
    //console.log('FAIL CALL getTestData() > e = ', e)
  }
}
export function* saga() {
  yield takeLatest<IGetTestData>(ActionKeys.GET_TEST_DATA, getTestDataSaga)
}
