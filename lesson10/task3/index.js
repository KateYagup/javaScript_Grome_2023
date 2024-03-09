const superRound = (num, prec) => {
    const mult = Math.pow(10, prec);

    return [Math.floor(num * mult) / mult,
    Math.trunc(num * mult) / mult,
    Math.ceil(num * mult) / mult,
    Math.round(num * mult) / mult,
    Number(num.toFixed(prec)),
    ];
};

// examples
const a = superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
const b = superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(a);
console.log(b);
