/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const pickProps = (obj, props) => {
    const resultObj = {};

    for (let key in obj) {
        for (let el of props) {
            if (el === key) {
                resultObj[key] = obj[key];
                break;
            }
        }
    }

    return resultObj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }
