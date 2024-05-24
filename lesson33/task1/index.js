const getMostActiveDevs = (struct) => {

}

getMostActiveDevs({ days: 7, userId: 'userId', repoId: 'repoId' });
const commit = 'api.github.com/repos/USERID/REPOID/commits?per_page=100';

const options = {
    method: 'GET',
    body: JSON.stringify()
}

fetch('api.github.com/repos/USERID/REPOID/commits?per_page=100', options)
    .then(response => response.json())
    .then(result => console.log(result));

