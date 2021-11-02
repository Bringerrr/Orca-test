import React, { useState, useCallback } from 'react'
import { TaskItem } from 'components/molecules'

const taskType = {
  default: 'default',
  sub: 'sub',
}

const Task = ({ title, id, createTime }) => {
  const [subtasksAreShown, setSubtasksAreShown] = useState(false)

  const toggleSubtask = useCallback(() => {
    setSubtasksAreShown(!subtasksAreShown)
  }, [subtasksAreShown])

  return (
    <div>
      <div>
        <TaskItem
          title={title}
          id={id}
          createTime={createTime}
          type={taskType.default}
          toggleSubtask={toggleSubtask}
          subtasksAreShown={subtasksAreShown}
        />
      </div>
      {subtasksAreShown && (
        <div>
          <TaskItem
            title={title}
            id={id}
            createTime={createTime}
            type={taskType.sub}
            toggleSubtask={toggleSubtask}
          />
        </div>
      )}
    </div>
  )
}

export default Task
