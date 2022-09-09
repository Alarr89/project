// function simpleMultiplication(number) {
//     if(number % 2 == 0) {
//         return number * 8;
//     }

//     return number * 9;
// }

//const simpleMultiplication = number => number % 2 ? number * 9 : number * 8;
const simpleMultiplication = number => number * (number % 2 ? 9 : 8);
console.log(simpleMultiplication(2));
