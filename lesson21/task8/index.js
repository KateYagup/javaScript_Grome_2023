export const finishList = () => {
    const elOfList = document.querySelector('.list');
    const elem1 = document.createElement('li');
    elem1.textContent = '1';
    elOfList.prepend(elem1);
    const elem8 = document.createElement('li');
    elem8.textContent = '8';
    elOfList.append(elem8);

    const elOfListSpecial = document.querySelector('.special');
    const elem4 = document.createElement('li');
    elem4.textContent = '4';
    elOfListSpecial.before(elem4);
    const elem6 = document.createElement('li');
    elem6.textContent = '6';
    elOfListSpecial.after(elem6);
}

// finishList();