'use strict';
//В этом уроке мы объединим промисы и и fetch api.

// api - интерфейс программного обеспечения или приложения.
//dom api - анпример document.querySelector();
//fetch api - встренная в браузер и современная штука для общения с серверами и построенная на промисах.

// fetch()

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json()) //тут ответ. мы получаем в json, но чтобы с ним работать, нужно перевести ее объект. есть встроенная функция json. можем использовать text, или есть еще пара других функций.
	.then((json) => console.log(json)); //далее полученный объект мы уже выводим в консоль.

//Пост запрос
fetch('https://jsonplaceholder.typicode.com/posts', {
	//объект настроек. два параметра: метод и боди - то, что мы будем отправлять.
	method: 'POST',
	body: JSON.stringify({ name: 'Alex' }),
	headers: { 'Content-type': 'application/json' },
})
	.then((response) => response.json())
	.then((json) => {
		console.log(json);
	});
