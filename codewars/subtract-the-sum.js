const SubtractSum = n => {
    let number = n - String(n).split('').reduce((sum, item) => sum += +item, 0);
    if(number > 100) return SubtractSum(number);
    else return number;
  }

console.log(SubtractSum('123'));