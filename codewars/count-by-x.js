function countBy(x, n) {
    let z = [];
    for(let i = 0; i < n; i++) z[i] = x * (i + 1);
    return z;
}

// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

//const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

// function countBy(x, n){
//     return Array.apply(0, Array(n)).map(function(v, i){
//       return (i + 1) * x;
//     });
//   }

// function countBy(x, n) {
//     for (var a = [], i = 0; i < n; i++) {
//       a.push(x * (1 + i))
//     }
  
//     return a
//   }

console.log(countBy(2, 5));