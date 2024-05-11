'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
// export const requestUserData = userId => {
//     // put your code here
// };
export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
        if (userId === 'broken') {
            setTimeout(() => {
                reject(new Error('User not found'));
            }, 500)
        } else {
            setTimeout(() => {
                resolve({
                    name: 'John',
                    age: 17,
                    email: 'userid777@example.com',
                    userId
                });
            }, 1000);
        }

    });

    return request;
};

// requestUserData('userid777')
//     .catch(error => console.log(error));
// // .then(data => console.log(data));


// requestUserData('broken-1')
//     .then(data => console.log(data)); 
