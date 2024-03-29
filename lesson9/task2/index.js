// Добавление свойств в объект.
// Написать 4 функции, которые будут добавлять свойство в объект разными способами

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    Object.assign(userData, { id: userId });
    return userData;
}


function addPropertyV3(userData, userId) {
    const res = Object.assign({}, userData, { id: userId });
    return res;
}

function addPropertyV4(userData, userId) {
    const res = {
        ...userData, id: userId,
    };
    return res;
}

// examples
const user = {
    name: 'Sam',
};
addPropertyV4(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
