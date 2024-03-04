import { createReduxHistoryContext, reachify } from 'redux-first-history'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext, reachify } from 'redux-first-history'
import { createWouterHook } from "redux-first-history/wouter";

import saga from '../redux/saga'

import globalReducer from '../ducks/global'

export const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed
});

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers({
    router: routerReducer,
    global: globalReducer,
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware)
  )
);
sagaMiddleware.run(saga)
export const history = createReduxHistory(store);
export const reachHistory = reachify(history);
export const wouterUseLocation = createWouterHook(history);
