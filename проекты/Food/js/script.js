"use strict";

//Скрипты будут выполняться только после загрузки dom.
window.addEventListener("DOMContentLoaded", function () {

  const tabs = require("./modules/tabs");
  const timer = require("./modules/timer");

  const cards = require("./modules/cards");
  const forms = require('./modules/forms');
  const forms2 = require('./modules/forms2');
  const modal = require('./modules/modal');
  const calc = require('./modules/calc');
  const slider = require('./modules/slider')

  tabs();
  timer();
  modal();
  cards();
  // forms();
  forms2();
  slider();
  calc();
});



