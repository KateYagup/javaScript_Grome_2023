class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(age) {
        if (age < 0) return false;
        else {
            this.age = age;
            if (age >= 25) {
                this.requestNewPhoto();
            }

            return age;
        }
    }

    static createEmpty(user) {
        // user.name = '';
        // user.age = null;
        return new this('', null);

    }
}