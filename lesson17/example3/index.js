// function defer(func, ms) {
//     return function () {
//         setTimeout(() => func.call(this, ...arguments), ms);
//     }
// }

// const sum = (a, b) => {
//     console.log(a + b);
// }

// const deferredSum = defer(sum, 1000);
// deferredSum(1, 6);


function defer(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}
//  тут arguments не обязательны

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, ${this.name}!`);
    }
}

const deferredHi = defer(user.sayHi, 1000);
deferredHi.call(user);
deferredHi.call({ name: 'Bob' });