// task 11
function findDivCount(a, b, n) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) result++;
  }
  return result;
}
findDivCount(3, 9, 3);
// task 10
// function sum(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }
//   return sum;
// }
// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// compareSums(5, 10, 5, 10);

// task 9

// function increaser(a, index) {
//   if (a > index) {
//     a += index;
//   }
//   return a;
// }
// task8 Простое число
// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0 && j < i) {
//         break;
//       } else if (j === i) {
//         console.log(i);
//       }
//     }
//   }
// }
// getPrimes(25);

// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     let j = 2;
//     console.log(i + ' % ' + j + ' = ' + (i % j));
//     while (i % j === 0) {
//       console.log('Цикл');
//       console.log(i);
//       j++;
//     }
//   }
// }
// getPrimes(25);

// function getPrimes(num) {
//   for (let i = 2; i <= num; i++) {
//     for (j = 2; j <= i; j++) {
//       if (i % j === 0) {
//         // console.log('Число делится ' + i + ' на' + j);
//         break;
//       }
//       console.log(i);
//     }
//   }
// }

// getPrimes(25);

// task 7
// function getSum(from, to) {
//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// getSum(5, 25);

// task 5
// let square = (num) => {
//   return num * num;
// }
// function getEvenOdd(number) {
//   if (number % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }
// function sayHi(name) {
//   console.log('Hi, ' + name);
// }

// sayHi('Tom');
