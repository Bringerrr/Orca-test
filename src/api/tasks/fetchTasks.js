import { delay, Storage } from 'utils'

export default delay(() => Storage.tasks.get())
