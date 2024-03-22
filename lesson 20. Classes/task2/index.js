class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }

    get sessionId() {
        return this._sessionId;
    }
}

class UserRepository {
    // users;
    constructor(users) {
        this._users = users;
        this._users = Object.freeze(users);

        // console.log(this.users);
    }
    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map((user) => user.name);
        // console.log(this.users.name);
    }
    getUserIds() {
        return this._users.map((user) => user.id);
    }
    getUserNameById(id) {
        const findRecorn = this._users.find((elem) => {
            if (id == elem.id) {
                console.log(elem.name);
                return elem.name;
            }
        });
        return findRecorn.name;
    }
}

const names = new UserRepository([new User('1', 'Bob', '332'), new User('2', 'Tom', '732'),]);
// console.log(names.getUserNames());
console.log('!!!');
console.log(names.getUserNameById(2));
console.log('!!!');
const user1 = new User(3, 'Ann', 344);
user1.name = 'Lida';
// console.log(names[0]);
console.log(user1.name);