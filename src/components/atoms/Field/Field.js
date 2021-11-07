import React from 'react'
import { FieldContainer, FieldName, FielText } from './Field.styles'

const Label = ({ name, value }) => (
  <FieldContainer>
    <FieldName>{name}</FieldName>
    <FielText>{value}</FielText>
  </FieldContainer>
)

export default Label
