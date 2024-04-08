export const getDiff = (startDate, endDate) => {
    const diffDays = endDate.getDay() - startDate.getDay();

    const difference = Math.abs(endDate - startDate);
    const secAll = difference / 1000;
    const minutesAll = difference / (1000 * 60);
    const hoursAll = difference / (1000 * 60 * 60);
    const daysAll = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hourRemain = Math.floor(hoursAll) - Math.floor(daysAll) * 24;
    const minutesRemain = Math.floor(minutesAll - Math.floor(hoursAll) * 60);
    const secondsRemain = Math.floor(secAll - Math.floor(minutesAll) * 60);

    console.log(difference);
    console.log(`${daysAll}d ${hourRemain}h ${minutesRemain}m ${secondsRemain}s`);
    return `${daysAll}d ${hourRemain}h ${minutesRemain}m ${secondsRemain}s`;
}

// const startDate = new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44));
// const endDate = new Date(Date.UTC(2019, 1, 22, 17, 52, 18));
// getDiff(startDate, endDate);

// const originalDate = new Date(2023, 2, 3, 12);
// const currentDate = new Date();
// console.log('Исходная дата ' + originalDate);
// console.log('Текущая дата ' + currentDate);
// console.log('Исходная секунда ' + new Date(originalDate).getSeconds());
// console.log('Текущая секунда ' + new Date().getSeconds());

// console.log(getDiff(originalDate, currentDate));