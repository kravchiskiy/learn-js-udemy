'use strict';

const now = new Date(); //поместим объект даты ткущей.
console.log(now);
//месяцы в датее считаются с нуля. выводится время по гриинвичу.
//В дату можно передавать аргументы. Можно передать дату в виде строки. это часто исопльзуется, когда у нас есть инпут с type=date
const now2 = new Date('2024-10-23');

//Можно четко настраивать дату передавая парамеетры в таком же порядке. год, месяц, день, часы, минуты, милисекунды
const now3 = new Date(2024, 10, 23, 20);

//Таймстемп, миллисекунды. Кроме строки, можно передать кол-во миллискунд, которая тоже будет превращена в дату. Очень удобно манипулировать, отсчет идет от 1970 года.
//Все даты, которые мы создаем, конвертируется в мс, и в будущем можно трансформировать в мс и обратно в дату.

//чтобы получить срок до 1970го, то тогда нужны просто отрицательные значенния.

//У объекта даты оч много различных меетодов.

//Первая группа - получение комонентов даты. (геттеры)
new Date().getFullYear(); //текущий год
new Date().getMonth();
new Date().getDate(); //day
new Date().getHours(); //hours

new Date().getDay(); //Номер для недели. с Воскресенья.
console.log(new Date().getDay()); //Все вот эти вещи, возвращаются с учетом текущего часового пояса.

//Если нужно указать относительно другого часового пояса, utc+0; Есть часовые аналоги, к которым прибавляется UTC.
new Date().getHours();
new Date().getUTCHours();

new Date().getTime(); //Возвращат Таймстамп. это число можно превратить обратно в дату, если мы поместим его как аргумент в нью Дэйт.
new Date().getTimezoneOffset(); //Разница между часовым поясом и UTC; в минутах.

//Вторая группа - Методы сеттеры. Указать дату.
//Все те же методы, только вместо гет - сет.
//Если указываем 40 часов, то компонент даты сам себя пытается поправить. т.е. появится не текущая дата, а слеедующая.

//Есть ееще пара интересных вещей.
//Метод Парсе - Date.parse() - тоже самое что и new Date().

//Можно использовать для промежутков времени.

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();

console.log(end - start);