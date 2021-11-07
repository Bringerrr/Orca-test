import React from 'react'
import { ArrowUp } from 'assets'
import { FilterWrapper, FilterIconContainer } from './Filter.styles'

const directionChangeMap = {
  desc: 'asc',
  asc: 'desc',
  [null]: 'asc',
}

const Filter = ({ name, direction, onChange }) => {
  function handleChange() {
    const newDirection = directionChangeMap[direction]

    onChange(name, newDirection)
  }

  return (
    <FilterWrapper onClick={handleChange}>
      <span>{name}</span>
      {!!direction && (
        <FilterIconContainer desc={direction === 'desc'}>
          <ArrowUp />
        </FilterIconContainer>
      )}
    </FilterWrapper>
  )
}

Filter.defaultProps = {
  direction: null,
}

export default Filter
