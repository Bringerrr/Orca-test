import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'components/atoms'
import { Task, Filters } from 'components/organisms'
import { getTasks, createTaskInit, setFilters } from './Tasks.reducer'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.filteredItems)
  const tasksLoading = useSelector(state => state.tasks.loading)

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  const memoizedSetFilters = useCallback(filters => {
    dispatch(setFilters(filters))
  }, [])

  function createClickHandler() {
    dispatch(createTaskInit())
  }

  return (
    <div>
      <h1>Processes</h1>
      <Button onClick={createClickHandler}>Create</Button>
      <div>
        <Filters setFilters={memoizedSetFilters} />
      </div>
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
