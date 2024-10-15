(function () {
	let number = 5;
	console.log(number);
})();

const user = (function () {
	const privat = function () {
		console.log('hi');
	};

	return {
		sayHello: privat,
	};
})();

//реализовано два модуля с помощью самовызывающейся анонимной функции. 