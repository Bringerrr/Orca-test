import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: state => {
      state.loading = true
    },
    createTaskSuccess: (state, action) => {
      state.items = [action.payload, ...state.items]
      state.loading = false
    },
    getTasks: () => {},
    setTasks: (state, action) => {
      state.items = action.payload
      state.loading = false
    },
    deleteTask: (state, action) => {
      const taskId = action.payload

      state.tasks = state.tasks.filter(task => task.id !== taskId)
    },
  },
})

export const { getTasks, setTasks, createTask, createTaskSuccess } = tasksSlice.actions

export default tasksSlice.reducer
