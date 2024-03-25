export const getSection = (num) => {
    const elem = document.querySelector(`span[data-number = "${num}"]`);

    // console.dir(elem);
    // console.log(elem.dataset.number);
    elemParent = elem.closest('.box');
    // console.log(elemParent);
    // console.log(elemParent.dataset.section);
    // return elemParent.dataset.section;
}

getSection(5);