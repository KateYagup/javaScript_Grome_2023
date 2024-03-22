export const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.log(titleElem);
    return titleElem;
}

export const getInputElement = () => {
    // const inputElem = document.getElementsByTagName('input')[0].value;
    // const inputElem = document.getElementsByTagName('input')[0]
    const inputElem = document.querySelector('input');
    console.dir(inputElem);
    return inputElem;
}

getTitleElement();
getInputElement();