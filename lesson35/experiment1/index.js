const imageOnLoad = document.querySelector('.koza');
const adres = 'https://avatars3.githubusercontent.com/u10001';
// const adres = "https://img.freepik.com/free-photo/front-view-portrait-goat_23-2148580047.jpg?t=st=1718039409~exp=1718043009~hmac=d6ac80c7d8408d4b4c4cea938296df76185f3a22578eadf6c80fa9c9b5e280a5&w=360";
const ready = () => {
    imageOnLoad.setAttribute('src', adres);
}
document.addEventListener('DOMContentLoaded', ready);