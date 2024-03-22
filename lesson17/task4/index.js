const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        const arrName = fullName.split(' ');
        // this.firstName = arrName[0];
        // this.lastName = arrName[1];

        [this.firstName, this.lastName] = [...arrName];
    }
};

user.setFullName('Kate Yagup');
console.log(user.getFullName());
