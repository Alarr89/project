// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num , num + 1];
    return arr;
}

// Место для третьей задачи
function getMathResult(base, repeat) {

    let result = '';
    let baseValue = base;

    if(typeof repeat === 'string' || repeat <= 0) {
        result = baseValue;
    } else {
        for(let i = 0; i < repeat; i++) {
            if(i === 0) {
                result += baseValue;
            } else {
                result += '---' + baseValue;
            }
            
            baseValue += base;
        }
    }

    return result;
}