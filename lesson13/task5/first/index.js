// разбить текст на строки
// напишите функцию, которая разделит входящую строку на строки с указанным количеством символов и вернет их в многострочном формате.

export const splitText = (text, len = 10) => {
    if (typeof text !== 'string') return null;
    console.log('text:' + text);
    console.log(text.substr(3, len));

    let startPosition = 0;
    const strArr = [];

    while (true) {
        const chunk = text.substr(startPosition, len);
        console.log(chunk);
        if (chunk.length === 0) break;
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        // strArr.push(chunck);
        startPosition += len;
    }
    return strArr.join('\n');
};

console.log(splitText('abcd efgh', 4));
splitText('abcd efgh', 4) // 'Abcd\n efg\nH