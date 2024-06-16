async function func() {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(17);
        }, 1000);
    })
    const result = await promise;
    console.log(result);
}

const result = func();
result.then(data => console.log(data));
// async function func() {
//     const promise = new Promise(resolve => {
//         setTimeout(() => {
//             resolve(17);
//         }, 1000);
//     });
//     const result = await promise;
//     console.log(result);
// };

// const result = func();
// result.then(data => console.log(data));

// const result = func();
// result.then(result => console.log(result));

// async function func() {
//     const promise = new Promise(resolve => {
//         setTimeOut(() => {
//             resolve(17);
//         }, 10000);
//     })
//     const result = await promise;
// }


