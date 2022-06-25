function fib(number) {
    
    let result = [0, 1];

    if (typeof(number) !== 'number' || number <= 0 || !Number.isInteger(number)) {

        return "";

    } else {

        for(let i = 2; i <= number; i++) {
            
            result[i] = result[i - 1] + result[i - 2]; 
        }

        result = result.slice(0, number);

        result = result.join(' ');
    
        return result;
    }

}
console.log(fib(5));
