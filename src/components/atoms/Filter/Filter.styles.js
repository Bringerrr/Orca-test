import styled, { css } from 'styled-components'

export const FilterWrapper = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 8px;
  cursor: pointer;
`

export const FilterIconContainer = styled.div`
  display: inline-block;
  width: 20px;

  ${props =>
    props.desc &&
    css`
      transform: rotate(180deg);
    `}
`
