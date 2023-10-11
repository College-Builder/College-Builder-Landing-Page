(() => {
	const button = window.document.querySelector('button[menu-button]');
	const buttonOff = window.document.querySelector('button[menu-button--off]');
	const menu = window.document.querySelector('div[menu-container]');
	const menuHeight = window.getComputedStyle(menu).height;

	menu.style.height = '0px';

	let state = false;

	button.addEventListener('click', () => handleClick());
	buttonOff.addEventListener('click', () => handleClick());

	function handleClick() {
		if (state) {
			menu.style.height = '0px';
			buttonOff.classList.remove('--on');
			button.classList.remove('--on');
		} else {
			menu.style.height = menuHeight;
			buttonOff.classList.add('--on');
			button.classList.add('--on');
		}

		state = !state;
	}
})();
