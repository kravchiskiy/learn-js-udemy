const modals = () => {
  console.log("modals");
  function bindModal(
    trigerSelector,
    modalSelector = null,
    closeSelector = null
  ) {
    const triger = document.querySelectorAll(trigerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);
    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        //   console.log("trigger");
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        //   document.body.overflow = "hidden";
        document.body.classList.add("modal-open");
      });
    });
    close.addEventListener("click", () => {
      console.log("click");
      modal.style.display = "";
      //   document.body.overflow = "";
      document.body.classList.remove("modal-open");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "";
        // document.body.overflow = "";
        document.body.classList.remove("modal-open");
      }
    });
  }
  //   const popupEngineerBtn = document.querySelector(".popup_engineer_btn"),
  //     modalEngineer = document.querySelector(".popup_engineer"),
  //     closeModalEngineer = document.querySelector(".popup_engineer .popup_close");
  //   console.log(popupEngineerBtn);
  //   console.log(modalEngineer);
  //   console.log(closeModalEngineer);
  function showModalByTimeout(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.overflow = "hidden";
    }, time);
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  //   showModalByTimeout('.popup', 3000)
};

export default modals;
