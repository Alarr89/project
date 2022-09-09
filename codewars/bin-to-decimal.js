let qwe = '00111';

function btd(number) {
    number = number.split('').reverse().join('');
    let result = 0;
    for(let i = 0, j = 1; i < number.length; i++, j *= 2) number[i] === '0' ? result += 0 : result += j;
    return result;
}

console.log(btd(qwe));

// var binary = "1001001";
// console.log(parseInt(binary, 2));

const binToDec = bin => parseInt(bin, 2);
console.log(binToDec(qwe));