import { delay, Storage } from 'utils'

export default delay(() => {
  const subTasks = Storage.subTasks.get()

  return subTasks
})
