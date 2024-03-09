function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }

  if (sum > 100) return true;
  return false;
}
