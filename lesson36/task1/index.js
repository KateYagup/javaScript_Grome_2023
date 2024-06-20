// /**
//  * @param {string[]} users
//  * @return {promise}
//  */


const getUsersBlogs = async users => {
    const usersUrl = await users.map(user => {
        const result = fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(res => res.blog);
        return result;
    });
    // console.log(usersUrl);
    try {
        Promise.all(usersUrl).then(res => console.log(res)).catch(err => console.log(err));
        return usersUrl;
    } catch {
        return null;
    }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
