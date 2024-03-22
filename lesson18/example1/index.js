'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
// export class Order {
//     // put your code here
// }


const event = {
    message: "Welcome to the party!",
    guests: [
        { name: 'John', age: 18, email: 'user-name' },
        { name: 'Bob', age: 17, email: 'b@gmail.com' },
    ],

    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                message: `Dear ${name}! ${this.message}`,
                email
            }))
    }
}

console.log(event.getInvitations());