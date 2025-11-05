/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex,
        height,
        weight,
        age,
        ratio = 1.375;
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex')
    } else {
        sex = 'female'
        localStorage.setItem('sex', 'female')
    }
    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375)
    }
    function initLocalsettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        })
    }
    initLocalsettings('#gender div', 'calculating__choose-item_active')
    initLocalsettings('.calculating__choose_big div', 'calculating__choose-item_active')
    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal()

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((elm) => {
            elm.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'))
                } else {
                    sex = e.target.getAttribute('id')
                    localStorage.setItem('sex', e.target.getAttribute('id'))
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass)
                })
                e.target.classList.add(activeClass)
                calcTotal()
            });
        })

    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', (e) => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red'
            } else {
                input.style.border = 'none'
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;

            }
            calcTotal();
        })
    }
    getDinamicInformation('#height')
    getDinamicInformation('#weight')
    getDinamicInformation('#age')
}
module.exports = calc;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

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


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    const forms = document.querySelectorAll("form");
    const message = {
        loading: "загрузка...",
        success: "Спасибо! скоро мы с вами свяжемся.",
        failure: "Сори...",
    };
    forms.forEach((item) => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            // body: formData,
            body: data,
        });
        return await res.json();
    };
    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            statusMessage.textContent = message.loading;

            form.insertAdjacentElement("afterend", statusMessage);
            const formData = new FormData(form);
            //обноввим 4 строки ниже.
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            //обновленные строки
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // fetch('server.php', {
            // 	method: 'POST',
            // 	body: formData,
            // })

            postData("http://localhost:3000/requests", JSON.stringify(object))
                // postData("http://localhost:3000/requests", json)
                // .then((data) => data.text())
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    console.log("что-то пошло не так");
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    function oldPostData(form) {
        form.addEventListener("submit", (e) => {
            //10.01 - перепишим на фетч. нужно убрать все, что касается нттпРекквеста.
            e.preventDefault();
            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            statusMessage.textContent = message.loading;
            // form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);

            //Скроем этот блок.
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            //как сдеелать так, чтобы все данные которые заполнил пользовватель в форме  получили в js b vjukb jnghfdbnm yf cthddth. самый порстой вариант чтобы такое епровернуть мы используем объект formData. нам нее всегда необходимо передать в объекте json.
            //заввисит от сервера и беекендра

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            // request.setRequestHeader('Content-type', 'application/json');
            //если мы отправляем json, то нам нужно переделать формДата в json. а точне просто перебрать формДата и поместить все это в новый объект.

            //formData - помогает быстро сформировать данные с формы
            const formData = new FormData(form);

            //Поскольку отправляем formData мы следующий усчасток кода тоже закоменируем.
            // const object = {};
            // formData.forEach((value, key) => {
            // 	object[key] = value;
            // });
            // const json = JSON.stringify(object);
            //у инпутов должны быть обязательно указан аттрибут name, причем

            // request.send(formData);
            // request.send(json);
            fetch("server.php", {
                method: "POST",
                // headers: { 'Content-type': 'application/json' },
                body: formData,
                // body: json,
            })
                .then((data) => data.text())
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    console.log("что-то пошло не так");
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            // request.addEventListener('load', () => {
            // 	if (request.status === 200) {
            // console.log(request.response);
            // // statusMessage.textContent = message.success;
            // showThanksModal(message.success);
            // form.reset();
            // // setTimeout(() => {
            // statusMessage.remove();
            // 		// }, 2000);
            // 	} else {
            // console.log('что-то пошло не так');
            // // statusMessage.textContent = message.failure;
            // showThanksModal(message.failure);
            // 	}
            // });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");

        //теперь нужно открыть структуру modal и добавить show, и сформировать новую структуру внутри modal вручную.
        openModal();
        if (openModal()) {
            console.log("true");
        } else {
            console.log("false");
        }

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close" data-close>&times;</div>
			<div class="modal__title">${message}</div>
		</div>
		`;
        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000);
    }

    // fetch('db.json')
    // 	.then((data) => data.json())
    // 	.then((res) => console.log(res));
    // fetch('http://localhost:3000/menu')
    // 	.then((data) => data.json())
    // 	.then((res) => console.log(res));
    // console.log(fetch('/проекты/Food/db.json'));

}



function forms2() {
    // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
}


module.exports = forms2;

/***/ }),

/***/ "./js/modules/forms2.js":
/*!******************************!*\
  !*** ./js/modules/forms2.js ***!
  \******************************/
/***/ ((module) => {

function forms() {
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    async function getResource(url) {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
}

module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
	const modal = document.querySelector(".modal");
	const modalTrigger = document.querySelectorAll("[data-modal]");
	// const modalCloseBtn = document.querySelector('[data-close]');
	//для того, чтобы закрытие кнопки отрабатывало даже на той кнопке, которая добавилась динамически, нам нужно использовать делегирование событий.
	function openModal() {
		modal.classList.add("show");
		modal.classList.remove("hide");
		// modal.classList.toggle('show');
		document.body.style.overflow = "hidden";
		// clearInterval(moadlTimerId);
	}
	function closeModal() {
		modal.classList.add("hide");
		modal.classList.remove("show");
		// modal.classList.toggle('show');
		document.body.style.overflow = "";
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener("click", () => {
			openModal();
		});
	});
	// modalTrigger
	// modalCloseBtn.addEventListener('click', () => {
	// 	closeModal();
	// });
	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute("data-close") == "") {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modal.classList.contains("show")) {
			closeModal();
		}
	});
	// const moadlTimerId = setTimeout(openModal, 5000);

	// window.addEventListener
	function showModalByScroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			openModal();
			window.removeEventListener("scroll", showModalByScroll);
		}
	}
	window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal;


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {

    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let slidedIndex = 1;
    let offset = 0;
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slidedIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slidedIndex;
    }
    //установим блоку ширину
    slidesField.style.width = 100 * slides.length + "%"; //все слайды на странице
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";
    slides.forEach((slide) => {
        slide.style.width = width;
    });
    slider.style.position = "relative";
    const indicators = document.createElement("ol");
    const dots = [];
    indicators.classList.add("carousel-indicators");
    indicators.style.cssText = ` 
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;`;

    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        // console.log("i");
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;`;

        if (i === 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        if (slidedIndex == 1) {
            slidedIndex = slides.length;
        } else {
            slidedIndex--;
        }
        if (slides.length < 10) {
            current.textContent = `0${slidedIndex}`;
        } else {
            current.textContent = slidedIndex;
        }
        dots.forEach((dot) => {
            dot.style.opacity = 0.5;
        });
        dots[slidedIndex - 1].style.opacity = 1;
        slidesField.style.transform = `translateX(-${offset}px)`;
    });
    next.addEventListener("click", () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        if (slidedIndex == slides.length) {
            slidedIndex = 1;
        } else {
            slidedIndex++;
        }
        if (slides.length < 10) {
            current.textContent = `0${slidedIndex}`;
        } else {
            current.textContent = slidedIndex;
        }
        dots.forEach((dot) => {
            dot.style.opacity = 0.5;
        });
        dots[slidedIndex - 1].style.opacity = 1;
        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slidedIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            if (slides.length < 10) {
                current.textContent = `0${slidedIndex}`;
            } else {
                current.textContent = slidedIndex;
            }
            dots.forEach((dot) => {
                dot.style.opacity = 0.5;
            });
            dots[slidedIndex - 1].style.opacity = 1;
            slidesField.style.transform = `translateX(-${offset}px)`;
        });
    });
}
module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
	const tabs = document.querySelectorAll('.tabheader__item '),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParrent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach((item) => {
			//item.style.display = 'none';
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	}
	function showTabContent(i = 0) {
		//tabsContent[i].style.display = 'block';
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');

		tabs[i].classList.add('tabheader__item_active');
	}
	hideTabContent();
	showTabContent();

	tabsParrent.addEventListener('click', (event) => {
		console.log('event');
		const target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

module.exports = tabs;


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
	//const deadline = '2025-05-11';
	// const deadline = '2024-10-29';
	// const deadline = '2024-12-06';
	// const deadline = '2024-12-16';
	// const deadline = '2025-08-20';
	const deadline = '2025-11-20';

	//Функция - разница между дедлайном и теекущием времени
	function getTimeRemainig(endTime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endTime) - Date.parse(new Date()); // кол-во мс. потом превратить это в дни, минуты, сеукнды.

		if (t <= 0) {
			//
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24));
			hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((t / 1000 / 60) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}

		return {
			total: t,
			days: days,
			hours: hours,
			minutes,
			seconds,
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			const t = getTimeRemainig(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
		updateClock();
	}
	setClock('.timer', deadline);
}
module.exports = timer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


//Скрипты будут выполняться только после загрузки dom.
window.addEventListener("DOMContentLoaded", function () {

  const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
  const timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");

  const cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
  const forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
  const forms2 = __webpack_require__(/*! ./modules/forms2 */ "./js/modules/forms2.js");
  const modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
  const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
  const slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js")

  tabs();
  timer();
  modal();
  cards();
  // forms();
  forms2();
  slider();
  calc();
});




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map