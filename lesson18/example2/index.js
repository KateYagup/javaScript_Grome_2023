const wallet = {
    transactions: [3, 15, 10, 5],
    getMax() {
        return Math.max.apply(null, this.transactions)
    },
    getMin() {
        return Math.min.apply(null, this.transactions)
    }
}

console.log(wallet.getMax());
console.log(wallet.getMin());
