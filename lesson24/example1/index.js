const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const getDayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    // console.log('dateInFuture' + dateInFuture);
    // console.log(new Date(dateInFuture).getDay());
    return weekDays[new Date(dateInFuture).getDay()];
}

const result = getDayOfWeek(new Date(2024, 4, 5), 14);
console.log(result);