// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return b - a;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

const flip=(d, a)=>{

    if (d === 'R') {
        a.sort(function(a, b) {
            return a - b;
        });
    } else if (d === 'L') {
        a.sort(function(a, b) {
            return b - a;
        });
    }

    return a;
}

console.log(flip('L', [3, 2, 1, 2]));

//const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

// const flip=(d, a)=>{
//     if(d === 'R') return a.sort((a,b)=>a-b);
//     if(d === 'L') return a.sort((a,b)=>b-a);
// }