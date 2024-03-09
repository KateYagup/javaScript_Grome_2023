function checker(arr) {
  if (!Array.isArray(arr)) return null;
  let min = arr[0];
  let max = arr[0];
  for (let el of arr) {
    if (el < min) min = el;
    if (el > max) max = el;
  }
  if (min + max > 1000) return true;
  else return false;
}
