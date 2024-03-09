function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  let swap;
  let listLength = array.length;

  while (listLength--) {
    let flag = false;
    for (let i = 0; i < listLength; i++) {
      if (array[i] > array[i + 1]) {
        flag = true;
        swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
      }
    }
  }
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) return null;
  let swap;
  let firstEl = 0;

  while (firstEl++ - array.length) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        flag = true;
        swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
      }
    }
  }
  return array;
}

sortAsc([1, 4, 2, 5, 3]);
sortDesc([1, 4, 2, 5, 3]);
