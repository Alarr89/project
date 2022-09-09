// function grow(x){
//     return x.reduce((a, b) => a * b);
// }

const grow = x => x.reduce((a, b) => a * b);

//grow=x=>x.reduce((a,b)=>a*b)

//const grow=x=>eval(x.join("*"))

console.log(grow([1,2,3,4]));