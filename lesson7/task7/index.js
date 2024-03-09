function filterNames(arr, text) {
    let resultArr = [];
    arr.map(el => console.log('!' + el.indexOf(text)));
    resultArr = arr.filter(el => el.length > 5 && el.indexOf(text) !== -1);
    return resultArr;
}

//  **Пример работы:**
filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
// const array = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

//   Output: ['Olivya', 'Nastya']