//Скрипты будут выполняться только после загрузки dom.
window.addEventListener('DOMContentLoaded', function () {
	//tabs
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

	//Timer
	//const deadline = '2025-05-11';
	// const deadline = '2024-10-29';
	const deadline = '2024-12-06';

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
});
