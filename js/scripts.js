const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {

    let s = 0,
        v = 0,
        moneySumm = 0,
        msg = '';

    for(let key in data.shops) {
        s += data.shops[key].width * data.shops[key].length;
        v += data.shops[key].width * data.shops[key].length * data.height;
    }

    moneySumm = v * data.moneyPer1m3;

    if(data.budget >= moneySumm) {
        msg = 'Бюджета достаточно';
    } else {
        msg = 'Бюджета недостаточно';
    }
    
    return msg;
}

console.log(isBudgetEnough(shoppingMallData));