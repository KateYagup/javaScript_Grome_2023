const inputElement = document.querySelector('.text-input');
inputElement.addEventListener('change', (event) => {
    console.log(event.target.value);
})