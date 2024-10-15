'use strict';

const arr = [1, 2, 3, 6, 8];

//delete last elem
arr.pop();

//add elem to end array
arr.push(10);

//delet and add first elem
// arr.shift()

//перебор массива
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
for (let value of arr) {
	console.log(value);
}
arr.forEach((elem, i, arr) => {
	console.log(elem);
});

//метод Map модифицирует массив. вернет новый массив.
arr.map(() => {
	//
});

arr.filter(() => {
	//фильтрует. например оставить только те, у которых тип данных строка. 
});


//split. join. sort.

//получили строку, и через запятую стоит название товаров. превратим в массив.
const str = 'apple, orrange, some product';
const products = str.split(', ');
//соединить массив в строку через разделитель.
const newStr = products.join('; ');
//отсортеруем.  
products.sort();


// Псевдо массив
// при работе с элементами на странице мы будем получать объект, структра котрого совпадает со струкктурой массива. у таких массивов не будет никаких методовв.     