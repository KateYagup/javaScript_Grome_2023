const userRepoList = document.querySelector('.repo-list');

export const renderRepos = reposList => {
    const nameItems = reposList.map(res => {
        const liElem = document.createElement('li');
        liElem.classList.add('repo-list__item');
        liElem.textContent = res.name;
        console.log(res.name);
        return liElem;
    });
    userRepoList.append(...nameItems);
};

export const cleanReposList = reposList => {
    userRepoList.innerHTML = '';
};