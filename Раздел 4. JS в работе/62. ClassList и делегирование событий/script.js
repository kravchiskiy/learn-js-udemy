//class list и делегирование собцытий.
const btns = document.querySelectorAll('button');

//получим все кнопки по тегу. чтобы получить список классов, нужно прописать .classlist, это свойство у дом узла.
console.log(btns[0].classList.length); //кол-во классов
console.log(btns[0].classList.item(0)); //получить класс по индексу. начинается с 0.
console.log(btns[0].classList.add('test')); //Добаляет класс
console.log(btns[0].classList.remove('test')); //удалить класс
console.log(btns[0].classList.toggle('test')); //переключать классы.
console.log(btns[0].classList.contains('test')); //переключать классы.

btns[0].addEventListener('click', function () {
	if (!btns[1].classList.contains('red')) {
		btns[1].classList.add('red');
	} else {
		btns[1].classList.remove('red');
	}
});

// делегироввание событий.
//у нас может быть очень много кнопок. мы хотим чтобы при клике на любую из них вызывалось одно и тоже событие.
//если кнопки добавляются динамически, то тогда мы уже не получим того результата, потому что кнопки будут без этих событий.

//Суть делегирования.
//Мы берем родителя кнопок(вв данном кейсе серая плашка) и работаем с ним. т.е. обработчик события по серой плашке. а внутри мы проверяем на что мы кликнули, т.е. назначем функция для потомков если они подходят под наши какие-то параметры.
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', function (event) {
	//Проверить, чьто кликнули в кнопку.
	console.dir(event.target);
	if (event.target && event.target.tagName == 'BUTTON') {
		//
		console.log('hello');
	}
	//Второй вариант провверки это - event.target.matches("button.red"). совпадает с кнопкой с классом red.
});

const button = document.createElement('button');
button.classList.add('red');
wrapper.append(button);

//Мееньше кода и экономим память браузера. ведь обработчик события всего лишь один.