const start = 50;
const end = 60;
let i = start;
let result = 0;

do {
  console.log('начальное i =' + i);
  if (i % 5 === 0) {
    console.log('i:' + i);
    console.log('число кратно 5 и ничего не делаем с result:' + result);
  } else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
    console.log('i:' + i);
    console.log('result:' + result);
    break;
  } else if (i % 3 === 0) {
    result -= i;
    console.log('i:' + i);
    console.log('result:' + result);
  } else if (i % 4 === 0) {
    result *= i;
    console.log('i:' + i);
    console.log('result:' + result);
  } else {
    console.log('Число не попало ни под одно условие:' + i);
  }
  i++;
} while (i <= end);
