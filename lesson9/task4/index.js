// Нужно написать функцию, которая объект преобразует в массив имен жителей



const getPeople = obj => {
    // Преобразуем объект rooms в массив и потом с помощью mapотбразсываем свойство room1, room2...
    console.log('Преобразовали объект в массив');
    const namesInRooms = Object.entries(obj);
    console.log(namesInRooms);
    console.log('Отбросили слова rooms1, rooms2 ...')
    const onlyNames = namesInRooms.map(name => name[1]);
    console.log(onlyNames);
    // тут нужно сделать массив из объектов, исключить []
    // Делаем массив плоским с помощью flat
    console.log('сделали массив плоским');
    const arrayOfObjects = onlyNames.flat();
    console.log(arrayOfObjects);

    // Теперь нужно преобразовать все эти объекты в массив
    console.log('Преобразовали все эти объекты в массив');
    // const arrayOfNames = Object.entries(arrayOfObjects);
    const arrayOfNames = arrayOfObjects.map(el => Object.entries(el));
    console.log(arrayOfNames);

    // Делаем массив плоским
    console.log('Делаем массив плоским');
    const flatArrayOfNames = arrayOfNames.flat();
    console.log(flatArrayOfNames);


    // Отбравсываем первые элементы массива

    console.log('Отбравсываем первые элементы массива');
    const result = flatArrayOfNames.map(el => el[1]);
    console.log(result);

    return result;
};

rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },
    ],
    room2: [
        { name: 'Dan' },
    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },
    ],
}

getPeople(rooms);