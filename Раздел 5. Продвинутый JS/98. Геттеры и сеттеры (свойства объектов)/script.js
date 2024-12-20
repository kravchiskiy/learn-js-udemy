/**
 * свойства аксессоры.
 * объект состоят из: 1) свойства это то, что описывает объект(характеристики, данные)
 * 2) методы - это то, что умеет делать объект.
 *
 * но, свойство делятся на две категории. свойство данные и свойство аксессоры.
 * 2е это целый комплекс, которые позволяют вам как присваивать так и получать значения. но при этом во внешнем коде они будут выглядеть как обычные свойства объекта.
 * они же делятся на 2 категории: геттеры и сеттеры. (получить и установить)
 *
 *
 */
const persone = {
	name: 'alex',
	age: 25,
	get userAge() {
		return this.age;
	},
	set userAge(num) {
		this.age = num;
	},
};

console.log(persone.userAge = 30);
console.log(persone.userAge);
