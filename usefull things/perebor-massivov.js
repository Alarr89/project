'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

/*
фильтр не трансформирует текущий массив, а создаёт новый.
Создаём переменную, которой присваеиваем отфильтрованный массив.
создаём функицю которая возвращает по какому либо условию через 
функцию.
*/

//////////////////////

//map 
/*
map тоже создаёт новый массив и работает над каждым элементом
массива через функцию
Можно так же и трансформировать наш массив в него же, но это типа
не круто.
*/

// let answers = ['IvaN', 'AnnA', 'heLLo'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

//////////////////////

// every/some
/*
Это очень крутая штука, которая возвращает тру или фолз если
хотя бы один элемент массива соответсвует условию или есле
все элементы массива ему соответствуют.
*/ 
// const some = [4, 'weqw', 'qwer'];

// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

//const arr = [1, 2, 3, 4, 5, 6];

//const res = arr.reduce((sum, current) => sum + current);

// Можно складывать и для строки
//const res = arr.reduce((sum, current) => `${sum}, ${current}`);

//console.log(res);

/*
Получается что reduce "схлопывает все элементы массива"
Перебирает каждый элемент.
Первое значение у нас 0, а второе это первое значение из массива.
Но первое значение можно и задать после запятой.
Можно так складывать как цифры так и строки.
*/

// Практика

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);



