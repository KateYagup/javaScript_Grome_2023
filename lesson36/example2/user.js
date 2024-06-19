
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const loadUserData = userData => {
    const { avatar_url, name, location } = userData;

    userAvatarElem.setAttribute('src', avatar_url);
    userNameElem.textContent = name;
    userLocationElem.textContent = location
        ? `from ${location}`
        : '';
};

export const renderUserData = userData => {
    console.log(userData);
    loadUserData(userData);
    console.log(userData.repos_url);
};
