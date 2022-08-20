'use strict';

const person = {
    name: 'Alex',
    age: 20
};

console.log(person);

const clone = JSON.parse(JSON.stringify(person));

console.log(clone);