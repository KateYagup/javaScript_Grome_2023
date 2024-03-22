
export const createCalculator = () => {
    let memo = 0;

    function add(numb) {
        return memo += numb;
    }

    function descrease(numb) {
        return memo -= numb;
    }

    function reset() {
        return memo = 0;
    }

    function getMemo() {
        return memo;
    }

    return {
        add,
        descrease,
        reset,
        getMemo,
    }
};
