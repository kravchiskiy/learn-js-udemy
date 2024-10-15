'use strict';
//Нужно повесить обработчик события domContentLoaded()
//код сработает только тогда, когда дом загружен.
//есть еще вариант с ВИНДОУ, по сути будет тоже самое.
document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'Логан',
			'Лига справедливости',
			'Ла-ла лэнд',
			'Одержимость',
			'Скотт Пилигрим против...',
		],
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list');
	const addForm = document.querySelector('.add'),
		addinput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');

	const makeChanges = () => {
		genre.textContent = 'Драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	/**
	 * 1. когда отправляется форма, отправляем данные в масив и после этого заново строим список фильмов.
	 *
	 * 2. Добавляе все парралельно. Добавляем новый элемент в верстку и добавляем новый элемент в базу данных.
	 */
	addForm.addEventListener('submit', (e) => {
		e.preventDefault(); //отмена стандартного поведения формы. т.е. перезагрузки

		let newFilm = addinput.value;
		const favorite = checkbox.checked;

		if (newFilm) {
			if(newFilm.length > 21){
				newFilm = `${newFilm.substring(0,22)}...`;
			}
			if(favorite){
				console.log('Добавляем любимый фильм');
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies); //задача 5
			createMovieList(movieDB.movies, movieList);
		}
		
		e.target.reset();
	});

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);
		films.forEach((film, i) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1}. ${film}
				<div class="delete"></div>
			</li>
		`;
		});

		document.querySelectorAll('.delete').forEach((btn,i)=>{
			btn.addEventListener('click',()=>{
				btn.parentElement.remove();
				//удалим элемент массива, согласно его id
				movieDB.movies.splice(i,1);
				createMovieList(films, parent);
			});
		});
	}
	const deleteAdv = (arr) => {
		//Привыкаем писать сразу в function expression
		arr.forEach((item) => {
			item.remove();
		});
	};
	deleteAdv(adv);
	makeChanges();
	
	createMovieList(movieDB.movies, movieList);
});
