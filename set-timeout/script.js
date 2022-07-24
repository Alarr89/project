let btn = document.querySelector('.btn');
let timerId,
i = 0;

// btn.addEventListener('click', () => {
//     //timerId = setTimeout(loger, 500);
//     timerId = setInterval(loger, 500);
// });

function loger() {
    if(i === 3) {
        clearInterval(timerId);
    }
    console.log('test');
    i++;
}

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 30);

    function frame() {
        if(pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);