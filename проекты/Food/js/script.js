//Скрипты будут выполняться только после загрузки dom.
window.addEventListener('DOMContentLoaded', function () {
	//tabs
	const tabs = require('./modules/tabs');
	const timer = require('./modules/timer');
	const modal = require('./modules/modal');

	//Timer

	//modal
	tabs();
	timer();
	modal();
});
