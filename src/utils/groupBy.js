const groupBy = (array, key) => {
  const result = {}

  array.forEach(item => {
    const groupKey = item[key]

    if (!Object.prototype.hasOwnProperty.call(result, groupKey)) {
      result[groupKey] = []
    }

    result[groupKey].push(item)
  })

  return result
}

export default groupBy
