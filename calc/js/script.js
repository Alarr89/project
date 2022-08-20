'use strict';

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });

// });

// Находим наши инпуты
const inputHrn = document.querySelector('#hrn'),
      inputUsd = document.querySelector('#usd');

// Создаём слушатель на каждое изменение в инпуте
inputHrn.addEventListener('input', () => {
    // создаём объект XMLHttpRequest()
    const request = new XMLHttpRequest();

    // Отправляем Get запрос, чтобы получит данные по ссылке
    request.open('GET', 'js/current.json');
    // устанавливаем настойки запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // Отправляем запрос
    request.send();

    // Теперь делаем слушатель на событий он лоад
    request.addEventListener('load', () => {
        if(request.status === 200) {
            // Принимаем и парсим запрос, типа приводим его к нормальному виду
            const data = JSON.parse(request.response);
            // И работает с полученым рэспонсом как с обычным объектом
            inputUsd.value = (+inputHrn.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
});