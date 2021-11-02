import React from 'react'

const Tasks = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <div key={task.id}>{task.name}</div>
    ))}
  </div>
)

export default Tasks
