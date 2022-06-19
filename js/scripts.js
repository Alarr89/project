// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (Number.isInteger(a) && a > 0) {
        let v = a * a * a;
        let s = 6 * (a * a);
        return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for(let i = 4; i <=36; i = i + 4) {
        if(seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}


console.log(getCoupeNumber(15));