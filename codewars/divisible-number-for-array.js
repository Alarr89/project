'use strict';

function divisibleBy(numbers, divisor){
    const result = [];
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] % divisor == 0 ? result.push(numbers[i]) : '';
    }
    return result;
}

console.log(divisibleBy([1,2,3,4,5,6,7,8], 2));