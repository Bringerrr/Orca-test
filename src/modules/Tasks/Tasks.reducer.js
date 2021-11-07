import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  groupedSubtasks: {},
  filters: {
    sort: [null, null],
    labels: [],
    search: '',
  },
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTaskInit: state => {
      state.loading = true
    },
    createTaskSuccess: (state, action) => {
      state.items = [action.payload, ...state.items]
      state.loading = false
    },
    getTasks: () => {},
    setTasks: (state, action) => {
      state.items = action.payload
      state.filteredItems = action.payload
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
    },
    setGroupedSubtasks: (state, action) => {
      state.groupedSubtasks = action.payload
    },
    addGroupedSubtasks: (state, action) => {
      const { taskId, subtasks } = action.payload

      state.groupedSubtasks[taskId] = subtasks
    },
    deleteSubtask: (state, action) => {
      const { taskId, subtaskId } = action.payload

      state.groupedSubtasks[taskId] =
        state.groupedSubtasks[taskId].filter(st => st.id !== subtaskId) || []
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setFiltedTasks: (state, action) => {
      state.filteredItems = action.payload
    },
  },
})

export const {
  getTasks,
  setTasks,
  createTaskInit,
  createTaskSuccess,
  deleteTask,
  setGroupedSubtasks,
  addGroupedSubtasks,
  deleteSubtask,
  setFilters,
  setFiltedTasks,
} = tasksSlice.actions

export default tasksSlice.reducer
