'use stirct';

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, rejevt) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             //reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.log('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(resolve(), time);
    });
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});


/* Получается, что Промисы нам нужны для того, чтобы выстраивать
функции в строгую цепочку выполнения, одна за другой. Пока
не выполнится первая асинхронщина, вторая будет её ждать.  
У промиса есть атрибуты resolve и reject. Для выполненого
обещания и не выполненного.
Они описываются в then и catch. А так же есть finally, 
которая выполняется в лбюом случае.
Так же есть all и race. Первая срабатывает после всех промисов
из массива, вторая после первого из массива.
*/