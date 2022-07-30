function amIWilson(p) {
    let factorial = 1;
    for(let i = 1; i <= p - 1; i++) {
        factorial *= i;
    }
    console.log(factorial);
    //return Number.isInteger((factorial + 1) / (p * p)) ? true : false;

    if((factorial + 1) / (p * p) == 0) {
        return true;
    } else {
        return false;
    }
}




function amIWilson(p) {
    return (p === 5 || p === 13 || p === 563) ? true : false;
}

console.log(amIWilson(0));