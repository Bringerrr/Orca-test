import { put, all, call, takeLatest } from 'redux-saga/effects'
import { fetchTasks, createTask } from 'api/tasks'
import {
  setTasks,
  getTasks,
  createTask as createTaskAction,
  createTaskSuccess,
} from './SubTasks.slice'

function* getTasksSaga() {
  const tasks = yield call(fetchTasks)

  yield put(setTasks(tasks))
}

function* createTasksSaga() {
  const createdTask = yield call(createTask)

  yield put(createTaskSuccess(createdTask))
}

export default function* watchTasks() {
  yield all([takeLatest(getTasks, getTasksSaga), takeLatest(createTaskAction, createTasksSaga)])
}
