
  //slider v2 (current)
  const slides = document.querySelectorAll(".offer__slide"),
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
    slidesField.style.transform = `translateX(-${offset}px)`;
  });