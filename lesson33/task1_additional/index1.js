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
    console.log('the one');
    console.log(userData[0].commit.author.date);

    const dayToday = new Date();
    const lastDay = new Date(2020, 2, 14, 0, 0, 0);
    console.log(lastDay);

    const dataExtract = userData.map(({ commit: { author: { email, date, name } } }) =>
        ({ email, date, name }))
        .filter(({ date }) => new Date(date) > lastDay);

    console.log('dataExtract');
    console.log(dataExtract);
    console.log('!!!');
    // console.log(dataExtract[0].name);


    // console.log(dayToday);
    // const lastDate = dayToday - days * 24 * 60 * 60 * 1000;
    // console.log(new Date(lastDate));
    // const sortByDate = dataExtract.filter(date => {
    //     if (date.commit. === lastDay) return true;
    // });
    // console.log(sortByDate(userData));
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