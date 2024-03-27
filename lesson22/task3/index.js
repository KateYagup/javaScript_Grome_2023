const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('click', () => {
    console.log(checkboxElem.checked);
    console.log(checkboxElem.value);
})