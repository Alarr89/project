'use strict';
/*
let counter = document.querySelector('.counter'),
    slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    currentSlide = 1;

showSlide(currentSlide);

function showSlide(n) {
    n > slides.length ? n = currentSlide = 1 : '';
    n < 1 ? n = currentSlide = slides.length : '';
    counter.innerText = n;
    slides.forEach(item => item.style.display = 'none');
    slides[n - 1].style.display = 'flex';
}

const slideAction = n => showSlide(currentSlide += n);

prev.addEventListener('click', () => slideAction(-1));
next.addEventListener('click', () => slideAction(1));
*/

let slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    currentSlide = 1;

showSlide(currentSlide);

function showSlide(n) {
    n > slides.length ? n = currentSlide = 1 : '';
    n < 1 ? n = currentSlide = slides.length : '';
    slides.forEach(item => item.style.display = 'none');
    slides[n - 1].style.display = 'flex';
}

const slideAction = n => showSlide(currentSlide += n);

prev.addEventListener('click', () => slideAction(-1));
next.addEventListener('click', () => slideAction(1));