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

// let newButton = document.createNewElement('button');
// newButton.classlist.add('red');
// wrapper.append(newButton);


const wrap = document.querySelector('.wrap'),
      buttons = wrap.querySelectorAll('.item'),
      addButton = document.querySelector('.add-item');

    // buttons.forEach(item => {
    //   item.addEventListener('click', () => {
    //       item.classList.toggle('yellow');
    //   });
    // });

    let counter = 0;
      
    addButton.addEventListener('click', () => {
        let buttonsAmount = buttons.length + 1;
        let newButton = document.createElement('div');
        newButton.classList.add('item');
        newButton.textContent = buttonsAmount + counter;
        wrap.append(newButton);
        counter++;
    });

    wrap.addEventListener('click', (event) => {
        if (event.target && event.target.tagName == "DIV") {
            event.target.classList.toggle('yellow');
        }
    });

    let newWrapper = document.createElement('div');
    newWrapper.classList.add('new-wrapper');
    document.querySelector('.add-item').after(newWrapper);

    let newAddButton = document.createElement('button');
    newAddButton.classList.add('new-add-button');
    newAddButton.textContent = 'Add Button';
    newWrapper.after(newAddButton);

    let count = 1;

    function addNewButton() {
        let newItem = document.createElement('div');
        newItem.classList.add('new-item');
        newItem.textContent = `New ${count}`;
        newWrapper.append(newItem);
        count ++;
    }

    for(let i = 0; i < 5; i++) {
        addNewButton();
    }

    newAddButton.addEventListener('click', () => {
        addNewButton();
    });

    newWrapper.addEventListener('click', (event) => {
        if (event.target && event.target.className == 'new-item') {
            event.target.classList.add('active');
        } else if (event.target && event.target.className == 'new-item active') {
            event.target.classList.remove('active');
        } else if(event.target && event.target.className == 'new-wrapper') {
            let test = document.querySelectorAll('.new-item');
            test.forEach(item => {
                item.classList.remove('active');
            });
        }
        console.dir(event.target);
    });


    //Recursion
    function log(num){
        if(num > 10){
            return;
        }
        console.log(num);
        log(num + 1);
    }
    
    log(1);



