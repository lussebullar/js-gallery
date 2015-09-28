## JavaScript Image Gallery 

####[Demo](http://lobanov.tech/js-gallery/)

#### Общие требования

- :no_entry: Использовать шаблонизатор BEMHTML и JS-фреймворк i-bem.js. *
    - :point_right: [Bootstrap 3](http://getbootstrap.com/)
- :metal: Поддержать последние версии браузеров.

#### Функциональные требования

- :metal: При загрузке: отображать первую картинку из альбома.
    - :no_entry: При повторной загрузке: отображать картинку, на которой остановились при предыдущем просмотре. *
- :metal: При движении курсора в окне браузера: появление стрелок (слева/справа).
- :metal: При перемещении курсора за пределы окна браузера: пропадание стрелок (слева/справа).

#### Пользовательские требования

- :metal: Стрелки: последовательно перелистывают картинки.
- :metal: Основное (текущее) изображение: отцентрировано по вертикали и горизонтали, сжимается с сохранением пропорций, если картинка меньше ширины или высоты окна браузера.
- :metal: Галерея картинок (превью): позволяет перейти к конкретным изображениям. Расположена внизу окна браузера, появляется при наведении курсора и прокручивается колесиком мыши или тачпадом. *
