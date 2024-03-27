const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
}

for (button of buttons)
    button.addEventListener('click', handleClick);