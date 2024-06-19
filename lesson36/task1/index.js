// /**
//  * @param {string[]} users
//  * @return {promise}
//  */

const getUsersBlogs = async users => {
    const response = await fetch(`https://api.github.com/users/${users}`);
    console.log(response);
    console.log(response.blog);
    const result = response.json();
    console.log(result);
    console.log(result.blog);
    // put your code here
};

getUsersBlogs('facebook');

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
