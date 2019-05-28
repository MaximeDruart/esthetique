function dupCheck(array) {
  let arr2 = []
  for (item of array) {
    !arr2.includes(item) ? arr2.push(item) : ""
  }
  return arr2
}

// let arr = [2, 3, 2, 3]
// arr = dupCheck(arr)
