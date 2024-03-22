export const getTitle = () => {
    const elTitle = document.querySelector('.title');
    // console.log(elTitle.textContent);
    return elTitle.textContent;
}

export const getDescription = () => {
    const elDescr = document.querySelector('.about');
    // console.log(elDescr.innerText);
    return elDescr.innerText;
}

export const getPlans = () => {
    const elPlans = document.querySelector('.plans');
    // console.log(elPlans.innerHTML);
    return elPlans.innerHTML;
}

export const getGoal = () => {
    const elGoal = document.querySelector('.goal');
    // console.log(elGoal.outerHTML);
    // console.log(elGoal);
    return elGoal.outerHTML;
}

// getTitle();
// getDescription();
// getPlans();
// getGoal();
