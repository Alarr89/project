// function isDivisible(n, x, y) {
//     if(n % x == 0 && n % y == 0) {
//         return true;
//     }
//     return false;
// }

const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

//const isDivisible = (n, x, y) => !(n % x || n % y);

// function isDivisible(n, ...dividers) {
//     return dividers.every(divider => n % divider == 0)
// }
                                 
//console.log(isDivisible(4, 2, 3));