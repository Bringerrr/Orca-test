import React, { useState, useCallback, memo, useEffect } from 'react'
import { Filter } from 'components/atoms'
import { LabelPicker } from 'components/molecules'
import { labels } from 'api/config'
import { useDebounce } from 'hooks'

const sortFilterNames = ['title', 'createTime']

const Filters = ({ setFilters }) => {
  const [sortState, setSortState] = useState([null, null])
  const [labelsState, setLabelsState] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [mounted, setMounted] = useState(false)
  const debouncedSearch = useDebounce(searchValue, 500)

  useEffect(() => {
    if (mounted) {
      setFilters({
        search: debouncedSearch,
        labels: labelsState,
        sort: sortState,
      })
    } else {
      return () => {
        setMounted(true)
      }
    }

    return null
  }, [debouncedSearch, labelsState, sortState, mounted])

  const setLabels = useCallback(value => {
    setLabelsState(value)
  }, [])

  function handleSearchChange(EO) {
    setSearchValue(EO.target.value)
  }

  function getFilterDirection(currentFilterName, state) {
    const [name, direction] = state

    return currentFilterName === name ? direction : null
  }

  const handleSortChange = useCallback((name, direction) => {
    setSortState([name, direction])
  }, [])

  return (
    <div>
      {sortFilterNames.map(name => (
        <Filter
          key={name}
          name={name}
          direction={getFilterDirection(name, sortState)}
          onChange={handleSortChange}
        />
      ))}
      <input type="text" placeholder="search" value={searchValue} onChange={handleSearchChange} />
      <LabelPicker value={labelsState} setValue={setLabels} options={labels} />
    </div>
  )
}

export default memo(Filters)
