export const squaredNumbers = () => {

    const items = document.querySelectorAll('li');
    for (let item of items) {
        item.dataset.squaredNumber = item.dataset.number ** 2;
    }
}

squaredNumbers();