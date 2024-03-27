const buttons = document.querySelectorAll('.btn');
const handleClick = event => {
    console.log(event.target.textContent);
}
for (let button of buttons)
    button.addEventListener('click', handleClick);