export default (array, key, direction = 'asc') => {
  if (direction && (direction === 'asc' || direction === 'desc')) {
    return array.sort((a, b) => {
      const valueA = a[key].toString()
      const valueB = b[key].toString()

      if (direction === 'asc') return valueA.localeCompare(valueB)

      return valueB.localeCompare(valueA)
    })
  }

  return array
}
