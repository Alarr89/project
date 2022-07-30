function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}

//const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

//const nearestSq = n => (Math.round(Math.sqrt(n)))**2

// function nearestSq(n){
//     return Math.round(n**0.5)**2
// }

// function nearestSq(n){
//     let higherNum = n + 1
//     while (Math.sqrt(higherNum) % 1 !== 0) {
//       higherNum++
//     }
//     let lowerNum = n - 1
//     while (Math.sqrt(lowerNum) % 1 !== 0) {
//       lowerNum--
//     }
//     if (n === 1) {
//     return n
//     } else if (higherNum - n < n - lowerNum) {
//       return higherNum
//     } else { 
//       return lowerNum 
//     }}


console.log(nearestSq(4));
