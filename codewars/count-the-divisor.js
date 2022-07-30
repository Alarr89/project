'use strickt';

function getDivisorsCnt(n){
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(n / i)) {
            result.push(i);
        }
    }

    return result.length;
}

console.log(getDivisorsCnt(12));