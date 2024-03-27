const checkElement = document.querySelector('.task-status');
checkElement.addEventListener('change', (event) => {
    console.log(event.target.checked);
})