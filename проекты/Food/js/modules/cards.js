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

module.exports = menuCards;
