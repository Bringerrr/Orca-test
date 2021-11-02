import { all, call } from 'redux-saga/effects'
import tasksSagas from 'modules/Tasks/Tasks.sagas'

export default function* () {
  yield all([call(tasksSagas)])
}
