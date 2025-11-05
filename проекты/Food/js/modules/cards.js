class menuCards {
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
function curds() {
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
			const elment = document.createElement("div");
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
	const getResource = async (url) => {
		console.log("go");
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`could not fetch ${url}, status ${res.status}`);
		}
		return await res.json();
	};
	//v1
	getResource("http://localhost:3000/menu").then((data) => {
		// console.log('go2', data)
		data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuCards(
				img,
				altimg,
				title,
				descr,
				price,
				".menu .container"
			).render();
		});
	});


	//v2
	//будет генерировать веерстку на лету...
	// getResource('http://localhost:3000/requests').then(data => { })
	// function createCard() {
	// 	data.forEach(({ img, altimg, title, descr, price }) => {
	// 		//тут будет генерироваться верстка.
	// 	})
	// }
	// new MenuCards(
	// 	'img/tabs/vegy.jpg',
	// 	'vegy',
	// 	'Меню "Фитнес"',
	// 	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	// 	9,
	// 	'.menu .container'
	// ).render();
	// new MenuCards(
	// 	'img/tabs/elite.jpg',
	// 	'elite',
	// 	'Меню “Премиум”',
	// 	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	// 	14,
	// 	'.menu .container'
	// ).render();
	// new MenuCards(
	// 	'img/tabs/post.jpg',
	// 	'post',
	// 	'Меню "Постное"',
	// 	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	// 	21,
	// 	'.menu .container'
	// ).render();
}
module.exports = curds;
