// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2,1));
// console.log(pow(2,2));
// console.log(pow(2,3));
// console.log(pow(2,4));
// console.log(pow(2,5));

const students = {
    js: [{
       name: 'John',
       progress: 100 
    }, {
        name: 'Ivy',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20 
         }, {
             name: 'Ann',
             progress: 18
         }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if(Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(data)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                } 
            }
        }
    }

    return total / students;
}

// Задача сделать функцию которая рекурсией находит факториал

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(1.5));


let arr = [1,2,3,4,5],
    result = '';

// for(let item in arr) {
//     result += item + '\n';
// }

for(let i = 0; i < arr.length; i++) {
    result = arr[i];
}

console.log(result);

console.log(4 % 3);
console.log(Math.sqrt(4));