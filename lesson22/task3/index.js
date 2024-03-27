const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('click', () => {
    if (checkboxElem.checked) console.log('true')
    else console.log('false');
    console.log(checkboxElem.value);
})