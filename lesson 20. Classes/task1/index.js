class Order {
    constructor(price, city, type) {
        this.price = price;
        this.city = city;
        this.type = type;
        this.id = Math.random().toString();
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
    }
}

checkPrice() {
    if (this.price > 1000) return true;
    return false;
}

confirmOrder() {
    if (!this.isConfirmed) {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }
}

isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
        return true;
    }
    return false;
}
}