import { fetchUserData, fetchRepositories } from './gateways.js';
import { loadUserData, renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';



const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userRepoList = document.querySelector('.repo-list');
const spinner = document.querySelector('.spinner');

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepositories(userData.repos_url);
        renderRepos(reposList);
    } catch (err) {
        alert(err.message);
    } finally {
        hideSpinner();
    }
    // fetchUserData(userNameInputElem.value)
    //     .then(userData => {
    //         hideSpinner();
    //         renderUserData(userData);
    //         return userData.repos_url;
    //     })
    //     .then(url => fetchRepositories(url))
    //     .then(reposList => {
    //         showSpinner();
    //         renderRepos(reposList);
    //     })
    //     .catch(err => {
    //         renderUserData(defaultUser);
    //         showSpinner();
    //         alert(err.message);
    //     })
    //     .finally(() => {
    //         hideSpinner();
    //     });
};

showUserBtnElem.addEventListener('click', onSearchUser);
window.addEventListener('unhandledrejection', function (e) {
    spinner.classList.add('spinner_hidden');
});


// работать с такими данными
// https://api.github.com/users/facebook
// https://api.github.com/users/google
// https://api.github.com/users/KateYagup