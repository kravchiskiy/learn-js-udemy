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
