const getMostActiveDevs = (struct) => {

}

getMostActiveDevs({ days: 7, userId: 'userId', repoId: 'repoId' });
const commit = 'api.github.com/repos/USERID/REPOID/commits?per_page=100';

// https://api.github.com/repos/sebmarkbage/create-react-app/commits?per_page=100

const options = {
    method: 'GET',
    body: JSON.stringify()
}

const renderUserData = userData => {
    console.log('from function');
    console.log(userData);
    console.log(userData[0]);
    // const { sha, node_id, commit, author } = userData;
    // console.log(sha);
    // console.log(node_id);
    // console.log(commit);
    // console.log(author);
}

// fetch(`https://api.github.com/repos/sebmarkbage/create-react-app/commits?per_page=100`, options)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .then(result => renderUserData(result));

const adres = `https://api.github.com/repos/sebmarkbage/create-react-app/commits?per_page=100`;

const fetchUserData = userName => {
    return fetch(userName)
        .then(response => response.json());
};

fetchUserData(adres)
    .then(result => renderUserData(result));