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

(() => {
	const button = window.document.querySelector('button[image-carousel-button]');
	const images = button.querySelectorAll('img');
	let imageIndex = 0;
	let goRight = true;
	let interval = setInterval(() => handleScroll(), 8000);

	button.addEventListener('click', () => handleScroll());

	window.addEventListener('resize', () => {
		imageIndex = 0;
		goRight = true;
		button.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	});

	function handleScroll() {
		clearInterval(interval);
		interval = setInterval(() => handleScroll(), 8000);

		let left;

		if (goRight) {
			left =
				button.scrollLeft +
				Number(window.getComputedStyle(button).width.replace('px', ''));

			imageIndex++;
		} else {
			left =
				button.scrollLeft -
				Number(window.getComputedStyle(button).width.replace('px', ''));

			imageIndex--;
		}

		if (imageIndex === 0) {
			goRight = true;
		}

		if (imageIndex === images.length - 1) {
			goRight = false;
		}

		button.scrollTo({
			top: 0,
			left,
			behavior: 'smooth',
		});
	}
})();
