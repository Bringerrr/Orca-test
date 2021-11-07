import React from 'react'
import { Cross } from 'assets'
import { LabelWrapper, LabelIconContainer } from './Label.styles'

const Label = ({ children, haveDelete, onDelete }) => (
  <LabelWrapper>
    {children}
    {haveDelete && (
      <LabelIconContainer>
        <Cross onClick={onDelete} />
      </LabelIconContainer>
    )}
  </LabelWrapper>
)

export default Label
