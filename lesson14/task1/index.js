// Создать функцию, которая будет строить сообщение с возможностью задавать часть сообщения

//  sendMessage('Ann')  => 'Ann, Just learn it! Your Gromcode')

let message = 'Just learn it';

let message = 'Just learn it';

export function sendMessage(name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}! Your ${sender}`);
}

export function setMessage(text) {
    message = text;
}

// function setMessage(text) {
//     message = text;
// }

// function sendMessage(name) {
//     const sender = 'Gromcode';

//     console.log(`${name}, ${message}!, Your ${sender}`);
// }

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');