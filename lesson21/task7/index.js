export const createButton = (buttonText) => {
    let bodyElement = document.querySelector('body');
    let button = document.createElement('button');
    button.textContent = buttonText;
    bodyElement.append(button);
}

// createButton('!!!!');

