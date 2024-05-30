const baseUrl = `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks`;
// const baseUrl1 = `api.github.com/repos/USERID/REPOID/commits?per_page=100`;

function getTasksList() {
    return fetch(baseUrl)
        .then(response => response.json());
}

function getTaskById(taskId) {
    // put your code here
}

// examples
getTasksList().then(tasksList => {
    console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

// getTaskById('2').then(taskData => {
//     console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });
