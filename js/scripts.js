'use strict';

const objMain = {
    a: 5,
    b: 6,
    c: 7
};

const objCopied = Object.assign({}, objMain);

objCopied.a = 1;
objCopied.d = 8;

console.log(objMain);
console.log(objCopied);

/* /////////////////////////////////// */

let arrMain = ['a', 'b', 'c'];

let arrCopied = arrMain.slice();

arrCopied[0] = 'opa opa';

console.log(arrMain);
console.log(arrCopied);

/* /////////////////////////////////// */

const arrFirst = ['opa', 'popa', 'knopa'],
      arrSecond = ['ipa', 'pipa', 'bipa'],
      arrThird = [...arrFirst, ...arrSecond, 'kepa', 'pepa'];

      console.log(arrThird);

function threeElems(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

threeElems(...arrFirst);

/* /////////////////////////////////// */
/* Получается, что копировать массивы и объекты можно просто с помощью фишки экмаскрипт 6 и 9, 
spread Это название массива с тремя точечками */

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);