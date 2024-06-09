const baseUrl = 'http://665d7308e88051d604069f45.mockapi.io/api/v1/users';

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })

};