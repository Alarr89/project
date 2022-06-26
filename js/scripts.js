'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};

let {border, bg} = options.color;
console.log(border);

//console.log(options.width);

//delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`${i}:${options[key][i]}`);
//         }
//     } else {
//         console.log(`${key}:${options[key]}`);
//     }
//     counter++;
// }

// console.log(counter);

// console.log(Object.keys(options).length);

