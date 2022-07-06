const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

    arr.sort();

    let list = [],
        a = [],
        b = [],
        c = [],
        rest = [];

    for(let i = 0; i < arr.length; i++) {
        if(i < 3) {
            a.push(arr[i]);
        } else if(i > 2 && i < 6) {
            b.push(arr[i]);
        } else if(i > 5 && i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        } 
    }

    list = [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];

    return list;
}
