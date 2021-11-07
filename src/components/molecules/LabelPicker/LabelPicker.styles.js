import styled, { css } from 'styled-components'

export const LabelPickerContainer = styled.div`
  position: relative;
  width: 300px;
  min-height: 30px;
  border: 1px solid #000;
  border-radius: 2px;
`

export const LabelList = styled.ol`
  width: 100%;
`

export const LabelListItem = styled.li`
  width: 100%;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const LabelPickerButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  border: 1px solid #000;
  border-radius: 2px;
  transform: rotate(180deg)
    ${props =>
      props.active &&
      css`
        transform: rotate(180deg);
      `};
`
