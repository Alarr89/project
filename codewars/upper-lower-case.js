// function isLowerCase(str) { return str == str.toLowerCase(); }

// console.log(isLowerCase('1'));

//const isUpperCase = (string) => /^[A-Z]*$/.test(string);

//console.log(isUpperCase('A'));

let sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)): -1;