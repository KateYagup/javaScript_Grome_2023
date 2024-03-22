const obj = {
    name: 'Bob',
    age: 17,
    func() {
        console.log(7);
    },
    func1() {
        console.log(9);
    },
}

function getOwnProps(obj) {
    let arr = [];

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] !== 'function') arr.push(prop);
        }
    }
    return arr;
}

console.log(getOwnProps(obj));
// export getOwnProps;