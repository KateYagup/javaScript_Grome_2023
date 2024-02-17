// task5

let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
let result_div = (sum - (sum % 1234)) / 1234;
let result_mod = sum % 1234;
console.log('div:' + result_div);
console.log('mod:' + result_mod);

console.log(!!((result_div - (result_div % result_mod)) / result_mod));

// task4
// let sum = 0;

// for (let i = 0; i <= 10000000; i++) {
//   sum += i;
// }

// console.log(sum);

// task 3

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log('Found');
//     sum += i;
//   }
// }
// if (sum * 5 > 5000) {
//   console.log('Bigger');
// } else {
//   console.log('Smaller or equal');
// }
