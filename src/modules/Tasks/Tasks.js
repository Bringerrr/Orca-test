import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'components/atoms'
import { Task } from 'components/organisms'
import { getTasks, createTask } from './Tasks.slice'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.items)
  const tasksLoading = useSelector(state => state.tasks.loading)

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  function createTaskInit() {
    dispatch(createTask())
  }

  return (
    <div>
      <h1>Processes</h1>
      <Button onClick={createTaskInit}>Create</Button>
      <div>
        {tasksLoading ? (
          <div>loading</div>
        ) : (
          <div>
            {tasks.map(task => (
              <Task key={task.id} id={task.id} title={task.title} createTime={task.createTime} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks
