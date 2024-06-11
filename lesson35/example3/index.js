const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userRepoList = document.querySelector('.repo-list');
const spinner = document.querySelector('.spinner');

const ready = () => {
    userAvatarElem.setAttribute('src', defaultAvatar);
    // userAvatarElem.src = defaultAvatar;
    spinner.classList.remove('spinner_hidden');
};

document.addEventListener('DOMContentLoaded', ready);


const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Failed to load data');
        });
};

const renderUserData = userData => {
    spinner.classList.add('spinner_hidden');
    const { avatar_url, name, location, repos_url } = userData;
    userAvatarElem.setAttribute('src', avatar_url);
    userNameElem.textContent = name;
    userLocationElem.textContent = location;
    const liElem = document.createElement('li');
    liElem.classList.add('repo-list__item');
    liElem.textContent = name;
    userRepoList.append(liElem);
}

const onSearchUser = () => {
    const dataGet = fetchUserData(userNameInputElem.value)
        .then(userData => renderUserData(userData));
    console.log(dataGet);
    // console.log(userNameInputElem.value);
}

showUserBtnElem.addEventListener('click', onSearchUser);




// https://api.github.com/users/facebook
// https://api.github.com/users/google
// https://api.github.com/users/KateYagup