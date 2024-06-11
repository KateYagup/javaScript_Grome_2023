const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

//  В инпут вводим facebook и google


// const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const defaultAvatar = 'https://img.freepik.com/free-vector/sticker-design-with-a-goat-cartoon-character_1308-60484.jpg?w=360&t=st=1716314573~exp=1716315173~hmac=c52ff9c9d5e22013b84c9aedd23e1ed9ad524b0a7d26408d872c1fc7f9e8b6f7';

userAvatarElem.src = defaultAvatar;


const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json());
};

const renderUserData = userData => {
    console.log(typeof userData);
    console.log(userData);
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location
        ? `from ${location}`
        : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);