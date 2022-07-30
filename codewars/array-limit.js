// function smallEnough(a, limit){
//     let newArray = [];

//     for (let i = 0; i < a.length; i++) {
//         a[i] <= limit ? newArray.push(1) : newArray.push(0);
//     }

//     return newArray.includes(0) ? false : true;
// }

// function smallEnough(a, limit){
//     return a.every(x => x <= limit);
// }

// function smallEnough(a, limit){
//     for (let i = 0; i < a.length; i++){
//       if (a[i] > limit) {
//         return false
//       }
//     }

//     return true
// }

//smallEnough = (a, l) => a.every(e => e <= l)


function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++) {
        if(a[i] > limit) {
            return false;
        }
    }
    return true;
}

console.log(smallEnough([66, 101], 120));