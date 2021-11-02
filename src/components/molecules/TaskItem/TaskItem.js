import React from 'react'
import { Button } from 'components/atoms'

const taskType = {
  default: 'default',
  sub: 'sub',
}

const TaskItem = ({ title, id, createTime, type, subtasksAreShown, toggleSubtask }) => (
  <div>
    <div>
      {' '}
      title {title} id {id} time{createTime}
    </div>
    {type === taskType.default && (
      <Button onClick={toggleSubtask}> {subtasksAreShown ? 'hide' : 'show'} sub tasks </Button>
    )}
    {type === taskType.sub && <Button> delete </Button>}
  </div>
)

TaskItem.defaultProps = {
  type: taskType.default,
  subtasksAreShown: false,
}

export default TaskItem
