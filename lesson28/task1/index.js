let dt = new Date(2020, 0, 7, 17, 17, 17);
console.log(dt);

export const shmoment = initValue => {
    let result = initValue;
    const calculator = {
        add(type, value) {
            let newDate = dt;

            switch (type) {
                case 'years':
                    let years = newDate.getFullYear();
                    years += value;
                    newDate.setFullYear(years);
                    break;
                case 'months':
                    let months = newDate.getMonth();
                    // console.log(months);
                    months += value - 1;
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
            let newDate = dt;

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
                    console.log('days');
                    console.log(days);
                    days -= value * 24;
                    console.log(value);
                    newDate.setHours(days);

                    break;
                case 'hours':
                    let hours = newDate.getHours();
                    value -= hours;
                    newDate.setHours(value);
                    break;
                case 'minutes':
                    let minutes = newDate.getMinutes();
                    value -= minutes;
                    newDate.setMinutes(value);
                    break;
                case 'seconds':
                    let seconds = newDate.getSeconds();
                    value -= seconds;
                    newDate.setSeconds(value);
                    break;
                case 'milliseconds':
                    let milliseconds = newDate.getSeconds();
                    value -= milliseconds;
                    newDate.setMilliseconds(value);
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

const result = shmoment(dt).add('days', 10).subtract('years', 10).result();
console.log(result);