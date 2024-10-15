console.log(document.body);

console.log(document.documentElement); //tag html

/**
 * Роидетльский элемент, это элемент который объединят в себе другие, находящииеся внутри него.
 * внутренности можно получить с помощью 3мя команд.
 *
 * 1.
 */
console.log(document.body.childNodes); // - все ноды и узли внутрии родителя.
//там будет перенос строки, потом элемент, потом элемент, потом перенос строки и тд.

//рахница между дом.узлами и элементами.
//каждая сущность находящаяся на странице по факту является узлом, но не ккаждый узел будет элементом.
//все что в тегах, это элементы. все, что вы возможно и не видете, это будет узлом. перенос строки и тд.
//li - это ДОМ элемент, но внутри него есть текстовый дом узел.

//firstChild / lastChild - или первый или последний node.
//firstElemeentChild / lastElementChild - или первый или последний элемент.

//=======================//

//Получить родителя, соседей, и детей от абсолютно любого элемента.
console.log(document.querySelector('#current').parentNode.parentNode); //родительский нод узел.
console.log(document.querySelector('#current').parentElement); //родительский елемент узел.

console.log(document.querySelector('[data-current="3"]')); // - получили элемент с определеным дата атрибутом.
console.log(document.querySelector('[data-current="3"]').prevSibling); // - получим предидущий нод узел.
console.log(document.querySelector('[data-current="3"]').nextSibling); // - получим следующий нод узел.
console.log(document.querySelector('[data-current="3"]').nextElementSibling); // - получим следующий елемент.
console.log(
	document.querySelector('[data-current="3"]').previousElementSibling
); // - получим следующий елемент.

//У childNodes нет аналога по элементам. но его делают вручную.
// childNodes дает псевдоколлекцию, и иногда мы не можем применить к нему цикл форИч и для этого юзаем фор-оф.

//Задача: перебрать все чайлдНодсы, и убрать из них текстовые ноды. в циклах есть крутые операторы брейк и континью. они нам и понадобятся тут.
console.log('======================');
for (let node of document.body.childNodes) {
	if (node.nodeName === '#text') {
		continue;
		//Если при переборе я наткнулся на текстовую ноду, я хочу чтобы эта итерация просто остановилась. (оператор брейк полностью остановит цикл.)
	}
	console.log(node);
}
