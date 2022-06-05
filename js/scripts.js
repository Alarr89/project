"use strict"

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

let personalMowieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов? 1',''),
    b = prompt('На сколько оцените его?',''),
    c = prompt('Один из последних просмотренных фильмов? 2',''),
    d = prompt('На сколько оцените его?','');

personalMowieDB.movies[a] = b;
personalMowieDB.movies[c] = d;

console.log(personalMowieDB);