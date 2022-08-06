'use strict';

let box = document.querySelectorAll('.box');
let button = document.querySelectorAll('button');

// button.addEventListener('click', () => {
//     //box.style.height = box.scrollHeight + 'px';
//     //alert(box.clientHeight);

//     if (box.offsetHeight <= 350) {
//         box.style.height = box.scrollHeight + 'px';
//     } else {
//         box.style.height = 350 + 'px';
//     }
// });

button.forEach(item => {
    item.addEventListener('click', () => {

        let thisBox = item.previousElementSibling;

        if(thisBox.offsetHeight < 360) {
            thisBox.style.height = thisBox.scrollHeight + 'px';
        } else {
            thisBox.style.height = 350 + 'px';
        }
    });
});

// document.addEventListener('click', (e) => {
//     let target = e.target;
//     let box = target.previousElementSibling;

//     if(target && target.tagName == "BUTTON") {
//         if(box.offsetHeight < 360) {
//             box.style.height = box.scrollHeight + 'px';
//         } else {
//             box.style.height = 350 + 'px';
//         }
//     }
// });

/* Вот это я ридмоор придумал */