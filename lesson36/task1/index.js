/**
 * @param {string[]} users
 * @return {promise}
 */


export const getUsersBlogs = async users => {
    try {
        const usersUrl = await users.map(user => {
            return fetch(`https://api.github.com/users/${user}`)
                .then(response => response.json())
                .then(res => res.blog);
        });
        Promise.all(usersUrl).then(res => console.log(res)).catch(err => console.log(err));
        return usersUrl;
    } catch (err) {
        throw new Error('Can\'t read data');
    }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
