// Создаём глобальный обработчик событий
window.addEventListener('DOMContentLoaded', () => {

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
});