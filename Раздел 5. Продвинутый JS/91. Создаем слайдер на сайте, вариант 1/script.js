//slider v1
  // const slides = document.querySelectorAll(".offer__slide"),
  //   prev = document.querySelector(".offer__slider-prev"),
  //   next = document.querySelector(".offer__slider-next"),
  //   total = document.querySelector("#total"),
  //   current = document.querySelector("#current");
  //   let slidedIndex = 1;
  //   if (slides.length < 10) {
  //     total.textContent = `0${slides.length}`;
  //   } else {
  //     total.textContent = slides.length;
  //   }
  //   function showSlideds(n) {
  //     //необхоимо предусмотреть граничные значения. из последнего в первый
  //     if (n > slides.length) {
  //       //если ушли в правую границу, то вернемся в начало
  //       slidedIndex = 1;
  //     }
  //     if (n < 1) {
  //       slidedIndex = slides.length;
  //     }

  //     //скрыть все слайды и показать только тот, который интересует.
  //     slides.forEach((item) => {
  //       item.style.display = "none";
  //     });

  //     slides[slidedIndex - 1].style.display = "block";

  //   if (slides.length < 10) {
  //     current.textContent = `0${slidedIndex}`;
  //   } else {
  //     current.textContent = slidedIndex;
  //   }
  //   }
  //   function plusSlides(n) {
  //     //Функционал, который буддет изменять slideIndex.
  //     showSlideds((slidedIndex += n));
  //   }
  //   //назначит обработчики событий на prev next

  // prev.addEventListener("click", () => {
  //   plusSlides(-1);
  // });
  // next.addEventListener("click", () => {
  //   plusSlides(1);
  // });
  //   //инициализируем слайдер
  //   showSlideds(1);