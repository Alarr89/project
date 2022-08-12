'use strict';

// function showThis(a,b) {
//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 15,
//     b: 20,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();


// const User = function(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`${this.name}`);
//     };
// };
// let toha = new User('Antoha', 15);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));

// Получается в начале была функция каунт, но она не знала на что умножать.
// Потом пришла функция дабл, и сказала что: "Я теперь решу твои проблемы, скажу тебе что делать и кто ты такая. 
// Всё теперь умножаем на 2". Привыязывается к функции и становится сама её исполнителем.

//5.
/// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();
 
// 1) Обычная функция: this, но если use strict - undefined.
// 2) Контекст у методов объекта - сам объект.
// Если вызывать функцию внутри метода, то this - undefied.
// 3) this в конструкторах и классах - это новый экзэмпляр объекта
// 4) Ручная привязка this: call, apply, bind
// Стрелочная функция отличается от обычной тем, что у неё нет контекста. И если в объекте создать метод, который создаёт стрелочную функцию, 
// то this будет браться из объекта а не из родительского метода как в случае с обычной функцией.
// 5)

//2

// const pers = function(name, type, atack) {
//     this.name = name;
//     this.type = type;
//     this.atack = function() {
//         console.log(this.type + ' atack!');
//     };
//     //this.atack = () => console.log(`${name} atack!`);
// };

// let warrior = new pers('Anita','warrior');
// warrior.atack();

// let strfunc = text => console.log(text);

// // let call = text => console.log(text);

// // call('asd');