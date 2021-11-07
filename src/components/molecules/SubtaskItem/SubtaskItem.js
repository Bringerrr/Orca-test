import React from 'react'
import { Button, Field, Label } from 'components/atoms'
import { SubtaskItemContainer } from './SubtaskItem.styles'

const SubtaskItem = ({ title, id, labels, handleDeleteSubtask }) => {
  function handleDelete() {
    handleDeleteSubtask(id)
  }

  return (
    <SubtaskItemContainer>
      <div>
        <Field name="title" value={title} />
      </div>
      <div>
        {labels.map(label => (
          <Label key={label}>{label}</Label>
        ))}
      </div>
      <Button onClick={handleDelete}>delete</Button>
    </SubtaskItemContainer>
  )
}

SubtaskItem.defaultProps = {
  subtasksAreShown: false,
}

export default SubtaskItem
