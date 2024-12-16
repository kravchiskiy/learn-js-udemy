export let one = 1;

let two = 2;
export { two };

export function seyHi() {
	console.log('Hi');
}

//это были именованные экспорты.
/**
 * самое главное чтобы при экспорте у таких сущностях было свое имя, чтобы мы могли экспортировать.
 */

/**
 * Так же может быть экспорт по дефолту.
 */
export default function seyHi2() {
	console.log('hi2');
}
