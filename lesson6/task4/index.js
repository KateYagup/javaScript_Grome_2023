function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  let resultArr = [];
  for (let el of arr) {
    if (el % 2 === 0) resultArr.push(el + delta);
    resultArr.push(el);
  }
  return resultArr;
}
