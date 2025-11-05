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