const obj = { 'John Doe': 19, 'Tom': 17, 'Bob': 18 };

const getAdults = obj => {
    const arr = Object.entries(obj);
    const adults = arr.filter(el => el[1] >= 18);
    const result = adults.map(el => el[0]);
    return result;
}

getAdults(obj);