function reverseArray(array) {
  if (!Array.isArray(array)) return null;
  let resultArray = [];
  let internediateArray = [];
  let first;
  for (let i = array.length - 1; i >= 0; i--) {
    // [first, ...internediateArray] = array;
    resultArray.push(array[i]);
  }
  return resultArray;
}

console.log('!!!');
reverseArray([1, 2, 3]);
