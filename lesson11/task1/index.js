// Разбить строку на подстроки
// Напишите функцию, которая разделит входящую строку на строки
// с указанным количеством символов и вернет их в виде массива
// последняя строка должна быть доплнена точками до нужного количества символов

const splitString = (text, len = 10) => {
    if (typeof text !== 'string') return null;

    const result = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) break;
        if (chunk.length < len) {
            console.log('chunk.length:' + chunk.length);
            for (let i = chunk.length; i < len; i++)
                chunk = chunk.concat('.');
        }
        result.push(chunk);
        startPosition += len;
    }
    return result;
};

console.log(splitString('abcs efgh', 4)); //['abcd', ' efg', 'h...'] 