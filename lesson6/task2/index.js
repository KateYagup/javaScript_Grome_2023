function squareArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let arrOfSquare = [];
  for (let numb of numbers) {
    arrOfSquare.push(numb * numb);
  }
  return arrOfSquare;
}
