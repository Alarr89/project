const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.wrapper');

// console.log(btns[0].classList.length); // показывает количество классов
// console.log(btns[0].classList.item[0]); // показывает определённый по порядку класс
// console.log(btns[0].classList.add('red', 'one-more-class')); // добавляет класс
// console.log(btns[0].classList.remove('red')); // удаляет класс
// console.log(btns[0].classList.toggle('red')); // если класс есть, то удаляет. Если нет, то добавляет

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// };

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red');
// });

// ДЕЛЕГИРОВАНИЕ

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.classlist.contains('red')) {
        console.log('hello');
    } else {
        console.log('opa opa');
    }
});

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.classlist.matches('.red')) {
        console.log('hello');
    } else {
        console.log('opa opa');
    }
});

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.classlist.tagname('BUTTON')) {
        console.log('hello');
    } else {
        console.log('opa opa');
    }
});

let newButton = document.createNewElement('button');
newButton.classlist.add('red');
wrapper.append(newButton);