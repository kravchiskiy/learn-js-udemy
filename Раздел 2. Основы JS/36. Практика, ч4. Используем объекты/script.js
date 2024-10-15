/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы -------- Done

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. -------Done Протестировать вместе с showMyDB. 

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: () => {
		personalMovieDB.count = +prompt(
			'сколько фильмов вы уже посмотрели?',
			''
		);
		while (
			personalMovieDB.count == '' ||
			personalMovieDB.count == null ||
			isNaN(personalMovieDB.count)
		) {
			personalMovieDB.count = +prompt(
				'сколько фильмов вы уже посмотрели?',
				''
			);
		}
	},
	rememberMyFilms: () => {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?').trim();
			const b = prompt('На сколько оцените его?', '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: () => {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB2: () => {
		personalMovieDB.privat
			? console.log('personalMovieDB', personalMovieDB)
			: null;
	},
	showMyDB: (hidden) => {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: () => {
		for (let i = 0; i <= 2; i++) {
			const answ = prompt(`Ваш любимый жанр под номером ${i + 1}`).trim();
			if (answ === '' || answ === undefined || answ === null) {
				i-- ;
			} else {
				personalMovieDB.genres.push(
					// prompt(`Ваш любимый жанр под номером ${i + 1}`)
					answ
				);
			}
		}
		personalMovieDB.genres.forEach((item, index) => {
			console.log(`Лю бимый жанр #${index+1} - ${item}`);
		});
		// console.log('personalMovieDB genders', personalMovieDB);
	},
	toggleVisibleMyDB: function () {
		this.privat === true ? (this.privat = false) : (this.privat = true);
	},
};

