const btn = document.querySelector('.el');
const btns = document.querySelectorAll('.el');

// Не надёжный метод
// btn.onclick = function() {
//     alert('click');
// };

// Хороший метод
const consSomething = (e) => {
    //e.preventDefault();
    console.log(e.target);
};

//btn.addEventListener('click', consSomething, {once: true});

btns.forEach(btn => {
    btn.addEventListener('click', consSomething, {once: true});
});



