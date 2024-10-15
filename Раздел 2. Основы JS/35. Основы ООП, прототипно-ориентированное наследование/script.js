'use strict';

/**
 * один из стилей программирование ООП: прототипно-ориентированное наследование.
 *
 *
 */

const soldier = {
	health: 400,
	armor: 100,
};
//Устаревший вариант
// const jonh = {
// 	health: 100,
// };

// Новый объект
const jonh = Object.create(soldier);

// Устаревший вариант
// jonh.__proto__ = soldier;
// console.log(jonh.armor);

// Вместо __прото__ нужно использовать object.create, getPrototypeOf и setPrototypeOf

// Object.setPrototypeOf(jonh, soldier);
