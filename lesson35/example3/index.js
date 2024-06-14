const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userRepoList = document.querySelector('.repo-list');
const spinner = document.querySelector('.spinner');

userAvatarElem.setAttribute('src', defaultAvatar);
// userAvatarElem.src = defaultAvatar;

// spinner.classList.add('spinner_hidden');

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            spinner.classList.remove('spinner_hidden');
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Failed to load data');
        })
        .catch(err => {
            spinner.classList.add('spinner_hidden');
            console.log(err);
            alert(err.message);
        });
};

const renderUserData = userData => {
    console.log(userData);
    const { avatar_url, name, location, repos_url } = userData;
    userAvatarElem.setAttribute('src', avatar_url);
    userNameElem.textContent = name;
    userLocationElem.textContent = `from ${location}`;
    console.log(repos_url);
    const reposUrl = fetch(repos_url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Failed to load data');
        })
        .then(result => {
            console.log(result);
            const nameItems = result.map(res => {
                const liElem = document.createElement('li');
                liElem.classList.add('repo-list__item');
                liElem.textContent = res.name;
                console.log(res.name);
                return liElem;
            });
            userRepoList.innerHTML = '';
            userRepoList.append(...nameItems);
            spinner.classList.add('spinner_hidden');
        })
        .catch(err => {
            spinner.classList.add('spinner_hidden');
            console.log(err);
            alert(err.message);
        });
}

const onSearchUser = () => {
    // spinner.classList.remove('spinner_hidden');
    const dataGet = fetchUserData(userNameInputElem.value)
        .then(userData => {
            spinner.classList.remove('spinner_hidden');
            renderUserData(userData);
            // spinner.classList.remove('spinner_hidden');
        });
    console.log(dataGet);
    // console.log(userNameInputElem.value);
}

showUserBtnElem.addEventListener('click', onSearchUser);



// работать с такими данными
// https://api.github.com/users/facebook
// https://api.github.com/users/google
// https://api.github.com/users/KateYagup