function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;
  const [...newArr] = arr;
  return newArr;
}
