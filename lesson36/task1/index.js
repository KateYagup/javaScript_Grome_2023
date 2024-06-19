// /**
//  * @param {string[]} users
//  * @return {promise}
//  */



const getUsersBlogs = async users => {
    let usersUrl = [];
    for (let user of users) {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const result = await response.json();
        usersUrl.push(result.blog);
    }
    // const usersUrl = users.reduce((acc, user) => {
    //     return acc.concat(fetch(`https://api.github.com/users/${user}`));
    // }, []);

    // const usersUrl = users.reduce((acc, user) => {
    //     const info = fetch(`https://api.github.com/users/${user}`);
    //     const infoJson = info.json();
    //     return acc.concat(infoJson.blog);
    // }, []);

    return usersUrl;

};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
