'use strict';

let number = 5;
function logNumber() {
	console.log(number);
}

number = 6;

logNumber();

/**
 * Лексическое окружение:
 * у каждой функции есть локальное и глобальное окружениее.
 * если для работы функции нужна переменная, но ее нет в локальной среде, то она ссылается на глобальное окружение.
 *
 * у каждого вызова функции разные локальные и глобальные состояния.
 */

function createCouner() {
	let counter = 0;
	const myFunction = function (params) {
		counter = counter + 1;
		return counter;
	};
	return myFunction;
}

const increment = createCouner();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
