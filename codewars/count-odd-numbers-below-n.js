// function oddCount(n){
//     let newArray = [];
//     for(let i = 1; i < n; i++) {
//         if(i % 2 !== 0) {
//             newArray.push(i);
//         }
//     }
//     return newArray.length;
// }

//const oddCount = n => n % 2 == 0 ? n / 2 : Math.round(n / 2) - 1;

const oddCount = n => Math.floor(n/2);

console.log(oddCount(15));