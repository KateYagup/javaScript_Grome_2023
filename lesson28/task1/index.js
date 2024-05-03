let dtFirst = new Date(2020, 0, 7, 17, 17, 17);
console.log(dtFirst);
let dt = new Date(dtFirst);


export const shmoment = initValue => {
    let result = new Date(initValue);
    const calculator = {
        add(type, value) {
            let newDate = result;

            switch (type) {
                case 'years':
                    let years = newDate.getFullYear();
                    years += value;
                    newDate.setFullYear(years);
                    break;
                case 'months':
                    let months = newDate.getMonth();
                    // console.log(months);
                    months += value;
                    newDate.setMonth(months);
                    break;
                case 'days':
                    let days = newDate.getHours();
                    console.log('days');
                    console.log(days);
                    days += value * 24;
                    console.log(value);
                    newDate.setHours(days);

                    break;
                case 'hours':
                    let hours = newDate.getHours();
                    value += hours;
                    newDate.setHours(value);
                    break;
                case 'minutes':
                    let minutes = newDate.getMinutes();
                    value += minutes;
                    newDate.setMinutes(value);
                    break;
                case 'seconds':
                    let seconds = newDate.getSeconds();
                    value += seconds;
                    newDate.setSeconds(value);
                    break;
                case 'milliseconds':
                    let milliseconds = newDate.getSeconds();
                    value += milliseconds;
                    newDate.setMilliseconds(value);
                    break;
            }
            result = newDate;
            return this;
        },
        subtract(type, value) {
            let newDate = result;

            switch (type) {
                case 'years':
                    let years = newDate.getFullYear();
                    years -= value;
                    newDate.setFullYear(years);
                    break;
                case 'months':
                    let months = newDate.getMonth();
                    console.log(months);
                    months -= value;
                    console.log(months);
                    newDate.setMonth(months);
                    break;
                case 'days':
                    let days = newDate.getHours();
                    // console.log('days');
                    // console.log(days);
                    days -= value * 24;
                    // console.log(value);
                    newDate.setHours(days);
                    break;
                case 'hours':
                    let hours = newDate.getHours();
                    hours -= value;
                    newDate.setHours(hours);
                    break;
                case 'minutes':
                    let minutes = newDate.getMinutes();
                    minutes -= value;
                    newDate.setMinutes(minutes);
                    break;
                case 'seconds':
                    let seconds = newDate.getSeconds();
                    seconds -= value;
                    newDate.setSeconds(seconds);
                    break;
                case 'milliseconds':
                    let milliseconds = newDate.getSeconds();
                    milliseconds -= value;
                    newDate.setMilliseconds(milliseconds);
                    break;
            }
            result = newDate;
            return this;
        },
        result() {
            return result;
        }
    }
    return calculator;
};

const result = shmoment(dt).subtract('hours', 2).subtract('minutes', 10).result();
console.log(result);
console.log(dtFirst);