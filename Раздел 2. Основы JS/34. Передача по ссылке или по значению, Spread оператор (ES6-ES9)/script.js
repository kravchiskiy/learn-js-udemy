'use strict';
let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a: 5,
	b: 1,
};

const copy = obj;
copy.a = 10;

console.log(copy);
console.log(obj);

/**
 * console.log(copy); console.log(obj);
 * в консоле будет один и тот же объект. модифицируя копию, м ыизменяем наш изначальный объект. 
 * примитивы: строки, числа, логических, то они передаются по значению. 
 * все остальное: объекты, массивы, функции, то они идут по ссылке.  на 15й строке кладется ссылка на существующий объект. 
 * 
 * 
 * 
 * Копии объектов создаются: 
 * 
 * 1 - с помощью функции, внутри перебор по объекту и поместим их в новую копию. фор..ин, и обязательно return. 
 * работает с обычным объектом. без глубоких копий.
 * 
 * 2 - Object.assign() - соединяется 2 объекта. независимая поверхносная копия. 
 * можно сделать новый пустой, перввым аргументом передаём пустой объект, вторым целевой объект.
 * 
 * 
 * Копии массива:
 * 
 * 3 - с помощью метода slice(); позволяет скопировать массив. 
 * 
 * новые возможности: оператор разворота. spread(es6 - array)
 * 
 * array = [...oldArray];
 * 
 * 4 - spread для объектов(es8-es9)
 * const newObj = {...oldObj}
 */