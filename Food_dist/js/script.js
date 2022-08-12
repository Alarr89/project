// Создаём глобальный обработчик событий
window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    // Создали переменные со всеми сущностями, с которыми будем работать
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    // Создадим функцию, которая удаляет табы и класс активности

    function hideContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // Создадим функцию, которая появляет табы и добавляет класс активности
    // Добавили ещё значение по умолчанию для i. Это фишка ES6
    function showContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideContent();
    showContent();

    // Добавляем лысэнэр делегированием событий
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        // Если попали во что-то и это что-то имеет класс tabheader__item
        if(target && target.classList.contains('tabheader__item')) {

            // то мы перебираем все табы
            tabs.forEach((item, i) => {

                // И если таб равняется нашему таргету
                // то мы вызываем его номер
                if(target == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });

    // Timer

    // создаём переменную с дэдлайном
    const deadline = '2022-08-02';

    // создаём функцию которая находит разницу мужду дэдлайном и натоящим временем
    function getTimeRemaining(endtime) {

        // создаём переменными с разницей миллисекунд и рассчитываем дни часы минуты и сукунды
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        // возвращаем всё что рассчитали объектом
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // эта функция нужна, чтобы выводить одназначиные значения с ноликом в начале
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    // эта ф-я находит селекторы и вносит туда изменения каждую секунду
    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        // тут мы вызываем функцию, чтобы таймер срабатывал сразу при загрузке страницы
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


    //Modal
    //data-close
    //data-modal

    const modalButtons = document.querySelectorAll('[data-modal]'),
          modalCloseButton = document.querySelector('[data-close]'),
          modalWindow = document.querySelector('.modal');

          function closeModal() {
            //modalWindow.style.display = 'none';
            modalWindow.classList.add('hide');
            modalWindow.classList.remove('show');
            document.querySelector('body').style.overflow = '';
          }

          function openModal() {
                //modalWindow.style.display = 'block';
                modalWindow.classList.add('show');
                modalWindow.classList.remove('hide');
                document.querySelector('body').style.overflow = 'hidden';
                clearInterval(modalInterval);
          }

          modalButtons.forEach(item => {
            item.addEventListener('click', openModal);
          });

          modalCloseButton.addEventListener('click', closeModal);

          modalWindow.addEventListener('click', (event) => {
            if(event.target === modalWindow) {
                closeModal();
            }
          });

          document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape' && modalWindow.classList.contains('show')) {
                closeModal();
            }
          });

          const modalInterval = setTimeout(openModal, 3000);

          function showModalOnScroll() {
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalOnScroll());
            }
          }

          window.addEventListener('scroll', showModalOnScroll());

});