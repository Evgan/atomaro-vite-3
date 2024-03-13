import createSagaMiddleware from 'redux-saga'
import {StateType} from "typesafe-actions"
import { combineReducers } from 'redux'
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history'
import { configureStore } from '@reduxjs/toolkit'

import saga from './redux/saga'
import {redusers} from './redusers'


export const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed
});

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  routerMiddleware
]

export const rootReducer = combineReducers({
  router: routerReducer,
  ... redusers
})

export type RootStateType = StateType<ReturnType<typeof rootReducer>>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: true
})

sagaMiddleware.run(saga)
export const history = createReduxHistory(store);
