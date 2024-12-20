//есть 3 способа повесить событие.

/**
 * 1. в самой верстке на теге поставить onclick='alert('click')' или другое событие с другим содержимым
 */

/**
 * 2. использовать свойтсво дом дерева для событий.
 */

const btn = document.querySelector('button');
btn.onclick = function () {
	//
};

/**
 * 3. использовать addEventListener (/remouveEventListener)
 *
 */

btn.addEventListener('click', () => {
	//
});

/**
 * Иногда необходимо как-то взаимодействовать с тем элементом, на которое мы вешаем событие. что за событие, или элемень, или координаты.
 * Для этого у нас есть специальное объект Event. имеет свои свойства. передается как аргумент в колбэк функцию
 */
btn.addEventListener('click', (e) => {
	//
});

/**
 * Для того, чтобы иметь возможность удалить функцию обработчика, нужно вынести ее в отдельную переменную.
 */

const deleteEvent = (e) => {
	e.target.remove();
};
btn.addEventListener('click', deleteEvent);
btn.removeEventListener(deleteEvent);

/**
 * Всплытие событий. это не тоже самое, что и всплытие переменных(хойстинг)
 * 
 * есть оверлей и внутри него кнопка. на оверлее и кнопке висит одно и тоже событие с одинаковой функцией.
 * сначала клик происходит по кнопке, а потом по иерархии идет вверх к продителю т.е. к оверлею. это и называется всплытием событий.
 * e.target = одинаковым - т.е. кнопки.
 * e.currentTarget = сначала кнопка, а потом оверлей. 
 */


/**
 * Отмена стандартного поведения в браузере.
 * 1. в функции обработчике события в самом конце поставить rerturn false;
 * 2. e.preventDefault();
 */