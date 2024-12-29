//Скрипты будут выполняться только после загрузки dom.
window.addEventListener('DOMContentLoaded', function () {
	//tabs
	const tabs = require('./modules/tabs');
	const timer = require('./modules/timer');
	const modal = require('./modules/modal');
	const cards = require('./modules/cards');

	//Timer

	//modal
	tabs();
	timer();
	modal();
	// cards();
	class MenuCards {
		constructor(srcImg, alt, title, descr, price, parent) {
			this.srcImg = srcImg;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.transfer = 27;
			this.parent = document.querySelector(parent);
			this.changeToUAH();
		}
		changeToUAH() {
			this.price = this.price * this.transfer;
		}
		render() {
			const elment = document.createElement('div');
			elment.innerHTML = `
				<div class="menu__item">
					<img src="${this.srcImg}" alt="${this.alt}">
					<h3 class="menu__item-subtitle">${this.title}"</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
				</div>
			`;
			this.parent.append(elment);
		}
	}
	new MenuCards(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render();
	new MenuCards(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		14,
		'.menu .container'
	).render();
	new MenuCards(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		21,
		'.menu .container'
	).render();

	//forms
	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'загрузка...',
		success: 'Спасибо! скоро мы с вами свяжемся.',
		failure: 'Сори...',
	};
	forms.forEach((item) => {
		postData(item);
	});
	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			//как сдеелать так, чтобы все данные которые заполнил пользовватель в форме  получили в js b vjukb jnghfdbnm yf cthddth. самый порстой вариант чтобы такое епровернуть мы используем объект formData. нам нее всегда необходимо передать в объекте json.
			//заввисит от сервера и беекендра

			// request.setRequestHeader('Content-type', 'multipart/form-data');
			request.setRequestHeader('Content-type', 'application/json');
			//если мы отправляем json, то нам нужно переделать формДата в json. а точне просто перебрать формДата и поместить все это в новый объект.

			//formData - помогает быстро сформировать данные с формы
			const formData = new FormData(form);
			const object = {};
			formData.forEach((value, key) => {
				object[key] = value;
			});
			const json = JSON.stringify(object);
			//у инпутов должны быть обязательно указан аттрибут name, причем

			// request.send(formData);
			request.send(json);
			request.addEventListener('load', () => {
				if (request.status === 200) {
					console.log(request.response);
					statusMessage.textContent = message.success;
					form.reset();
					setTimeout(() => {
						statusMessage.remove();
					}, 2000);
				} else {
					console.log('что-то пошло не так');
					statusMessage.textContent = message.failure;
				}
			});
		});
	}
});
