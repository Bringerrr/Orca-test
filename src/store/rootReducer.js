import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import TasksSlice from 'modules/Tasks/Tasks.reducer'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: TasksSlice,
})

export { history }

export default reducer
