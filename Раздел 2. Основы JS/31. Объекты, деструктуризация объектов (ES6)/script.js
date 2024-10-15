'use strict';
// const obj = new Object();

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function(){
		console.log('test');
	}
};
/**
 * как обратиться к свойствам объекта:
 */
console.log(options.name);
console.log(options['name']);

//delete
delete options.name;

//перебрать все свойства объекта.
for (let option in options) {
	console.log(option);
}

//object.keys(options).length - посчитать кол-во ключей. длинна объекта.

//деструктуризация массива
const {border, bg} = options.colors;
//вытянули из объекта определенные переменные. к ним можно теперь обратится напрямую.
