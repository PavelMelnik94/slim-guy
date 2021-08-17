# методы дисплея

### .show() - display: '';
#### никаких аргументов

### .hide() - display: none;
#### никаких аргументов

### .toggle() - '' -> none, none -> '';
#### никаких аргументов

<hr>

# методы классов

### .addClass(...classNames) - добавить класс\ы
#### $('.active').addClass('hello', 'world');

### .removeClass(...classNames) - удалить класс\ы
#### $('.active').removeClass('hello', 'world');

### .toggleClass(...classNames) - переключить класс.
#### $('.active').toggleClass('hello'); //один аргемент 


<hr>

# хендлеры

### .on('eventName', колбэк) - добавить обработчик
#### сокращение addEventListener('eventName', cb);

### .off('eventName', колбэк) - удалить обработчик
#### сокращение removeEventListener('eventName', cb);

### .click(handler) - события клика
#### уже написанное событие блика, которое принимает отдельно написанную функцию-handler

<hr>

# аттрибуты

### .setAttr(attrNname, attrValue) - добавить аттрибут и его значение
#### $('div').setAttr('data-active', 'true')

### .getAttr(attrName) - возвращает ЗНАЧЕНИЕ аттрибута у указаного элемента.
#### const attribute = element.getAttribute(attributeName);

### .hasAttr(name, value) -  возвращает логическое значение указывающее, имеет ли используемый элемент используемое атрибут или нет.
#### var result = element.hasAttribute(attName);



# экшены

### .html(content) - вставить html
#### если не передавать параметр, то он вернет существующий html элемента

### .eq(i) - выбрать элемент по индексу
#### $('div').eq(2) - среди коллекции дивов будет выбрать элемент с индексом 2(третий див).


### .index(); - вычисление индекса элемента. возвращает число.
#### $('div').click(function() {$(this).index(); })



### .find() - найти элементы с подходящим селектором среди коллекции


### siblings() - находит все соседние элементы, не включая элемент на котором было произведено действие

### closest() - находит ближайший блок по заданному селектору


#### нативные анимации. request animation frame

### fadeIn(скорость) - меняет display = block и opacity с 0 до 1 за заданную скорость.

### fadeOut(скорость) - меняет opacity с 1 до 0 за заданную скорость и по итогу удаляет элемент со страницы через display = 'none'.


#### сниппены:

переключение активного класса по клику на конкретный элемент.

$('element').on('click', function() {
    $(this).toggleClass('active')
})


проверка, существует ли атрибут, перед тем как задать значение

if ($('.selector')hasAttribute("align")) {
  $(this).setAttribute("align", "center");
}