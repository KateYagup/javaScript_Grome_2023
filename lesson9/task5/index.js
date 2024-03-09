// Посчитать баланс по трем транзакциям
// Задан массив транзакций. Нужно посчитать итоговую сумму транзакций

const getTotalRevenue = transactions => {
    let sum = 0;
    for (let obj of transactions) {
        sum += obj.amount;
        console.log(obj.amount + ' ' + sum);
    }
    return sum;
};

// examples
const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
