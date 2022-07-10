/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoItems = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    banner = document.querySelector('.promo__bg'),
    moviesList = document.querySelector('.promo__interactive-list');
    
promoItems.forEach(item => {
    item.remove();
});

// promoItems.forEach(function(item) {
//     item.remove();
// });

genre.textContent = 'ДРАМА';

banner.style.cssText = `background:url("img/bg.jpg")`;

movieDB.movies.sort();

moviesList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    moviesList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}</li>`;
});










