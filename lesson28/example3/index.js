export const mult = a => b => a * b;
export const twice = mult(2);
export const triple = mult(3);
const result = twice(3);
console.log(result);