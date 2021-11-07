import { put, all, call, takeLatest, select } from 'redux-saga/effects'
import { fetchTasks, createTask, deleteTask as deleteTaskAPI } from 'api/tasks'
import { fetchSubTasks } from 'api/subTasks'
import { groupBy, sortAlph } from 'utils'
import {
  setTasks,
  getTasks,
  deleteTask,
  createTaskInit,
  createTaskSuccess,
  setGroupedSubtasks,
  addGroupedSubtasks,
  deleteSubtask,
  setFilters,
  setFiltedTasks,
} from './Tasks.reducer'

export function* getTasksSaga() {
  const tasks = yield call(fetchTasks)
  const subtasks = yield call(fetchSubTasks)
  const groupedSubtasks = groupBy(subtasks, 'taskId')

  yield put(setTasks(tasks))
  yield put(setGroupedSubtasks(groupedSubtasks))
}

function* createTasksSaga() {
  const createdTask = yield call(createTask)

  const {
    task,
    task: { id: taskId },
    subtasks,
  } = createdTask

  yield put(createTaskSuccess(task))
  yield put(addGroupedSubtasks({ taskId, subtasks }))
}

function* deleteTaskSaga({ payload }) {
  const { taskId } = payload
  const subtasks = yield select(state => state.tasks.groupedSubtasks?.[taskId])
  const subtasksAreEmpty = !subtasks.length

  if (subtasksAreEmpty) {
    yield call(deleteTaskAPI, taskId)
    yield put(deleteTask(taskId))
  }
}

function* filterTasksSaga({ payload }) {
  const {
    search,
    labels,
    sort: [key, direction],
  } = payload
  const tasks = yield select(state => state.tasks.items)
  const groupedSubtasks = yield select(state => state.tasks.groupedSubtasks)
  let newTasks = [...tasks]

  if (direction) {
    newTasks = sortAlph(newTasks, key, direction)
  }

  if (search) {
    newTasks = newTasks.filter(
      task => task.title.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    )
  }

  if (labels.length) {
    newTasks = newTasks.filter(task => {
      const subtasks = groupedSubtasks[task.id]

      return subtasks.some(st => st.labels.some(label => labels.includes(label)))
    })
  }

  yield put(setFiltedTasks(newTasks))
}

export default function* watchTasks() {
  yield all([
    takeLatest(getTasks, getTasksSaga),
    takeLatest(createTaskInit, createTasksSaga),
    takeLatest(deleteSubtask, deleteTaskSaga),
    takeLatest(setFilters, filterTasksSaga),
  ])
}
