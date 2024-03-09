const withdraw = (clients, balances, client, amount) => {
    let number;
    clients.map((el, index) => {
        if (el === client) number = index;
    });
    if (balances[number] >= amount) {
        balances[number] -= amount;
        return balances[number];
    }

    return -1;
};

// examples
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
