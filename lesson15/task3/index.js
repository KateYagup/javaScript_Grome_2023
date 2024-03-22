const createLogger = () => {

    let memo = [];

    function log(text) {
        memo.unshift({ message: text, dateTime: new Date(), type: 'log' });

    }

    function error(text) {
        memo.unshift({ message: text, dateTime: new Date(), type: 'error' });
    }

    function warn(text) {
        memo.unshift({ message: text, dateTime: new Date(), type: 'warn' });
    }

    function getRecords(text) {
        if (text === undefined) return memo;
        console.log('!!!');
        return memo.filter(el => el.type === text);
    }

    return {
        warn,
        error,
        log,
        getRecords,
    }
};

// const logger1 = createLogger();
// logger1.log('User logged in');
// console.log(logger1.getRecords());
// logger1.log('User is tring to ented restricted page');
// console.log(logger1.getRecords());

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
// logger1.error('Unexpected error on the site');
// console.log(logger1.getRecords());

// logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]


// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// console.log(logger2.getRecords());
// const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []
