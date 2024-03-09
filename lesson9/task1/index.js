//нипишем функцию, которая будет принимать объект и выводить в консоль по очереди все свойства этого объекта

function getKeys(obj) {
    let objKeys = Object.keys(obj);
    for (let el of objKeys) {
        console.log(el);
    }
}

const obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
getKeys(obj);