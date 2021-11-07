import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TaskItem, SubtaskItem } from 'components/molecules'
import { deleteSubtask } from 'modules/Tasks/Tasks.reducer'

const Task = ({ title, id, createTime }) => {
  const dispatch = useDispatch()
  const [subtasksAreShown, setSubtasksAreShown] = useState(false)
  const subtasks = useSelector(state => state.tasks.groupedSubtasks?.[id])

  const toggleSubtask = useCallback(() => {
    setSubtasksAreShown(!subtasksAreShown)
  }, [subtasksAreShown])

  const handleDeleteSubtask = useCallback(
    subtaskId => {
      dispatch(deleteSubtask({ taskId: id, subtaskId }))
    },
    [id],
  )

  return (
    <div>
      <div>
        <TaskItem
          title={title}
          id={id}
          createTime={createTime}
          subtasksAreShown={subtasksAreShown}
          toggleSubtask={toggleSubtask}
        />
      </div>
      {subtasksAreShown && (
        <div>
          {subtasks.map(task => (
            <SubtaskItem
              key={task.id}
              title={task.title}
              id={task.id}
              labels={task.labels}
              handleDeleteSubtask={handleDeleteSubtask}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Task
