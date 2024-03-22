class wallet {
    #ballance = 0;

    getBalance() {
        return this.#ballance;
    }

    deposit(amount) {
        this.#ballance += amount;
    }

    withdraw(amount) {
        if (amount > this.#ballance) {
            console.log('No enough gunds');
            return;
        }
        this.#ballance -= amount;
    }
}