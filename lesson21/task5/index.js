export const setButton = (buttonText) => {
    let parent = document.querySelector('body');
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    parent.append(button);
}


setButton('button text');