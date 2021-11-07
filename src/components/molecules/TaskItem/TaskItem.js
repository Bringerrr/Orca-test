import React from 'react'
import { Button, Field } from 'components/atoms'
import { TaskItemContainer } from './TaskItem.styles'

const TaskItem = ({ title, createTime, subtasksAreShown, toggleSubtask }) => (
  <TaskItemContainer>
    <div>
      <Field name="title" value={title} />
      <Field name="time" value={createTime} />
    </div>
    <Button onClick={toggleSubtask}>{subtasksAreShown ? 'hide' : 'show'} sub tasks</Button>
  </TaskItemContainer>
)

TaskItem.defaultProps = {
  subtasksAreShown: false,
}

export default TaskItem
