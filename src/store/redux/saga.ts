import { all } from 'redux-saga/effects'

import { saga as globalSaga } from '../ducks/global'



export default function* () {
    yield all([
        globalSaga()
    ])
}
