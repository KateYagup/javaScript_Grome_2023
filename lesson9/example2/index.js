// Копирование объекта

function copyObj(obj) {
    return Object.assign({}, obj);
}

const obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };
copyObj(obj);