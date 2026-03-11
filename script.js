document.addEventListener('DOMContentLoaded', function () {
	// Nav toggle for mobile
	function setupNavToggle() {
		// support multiple headers/pages: query buttons and navs
		const toggles = document.querySelectorAll('#navToggle');
		toggles.forEach(btn => {
			const nav = document.getElementById('mainNav');
			if (!nav) return;
			btn.addEventListener('click', () => {
				const expanded = btn.getAttribute('aria-expanded') === 'true';
				btn.setAttribute('aria-expanded', String(!expanded));
				nav.classList.toggle('open');
			});
		});
	}

	setupNavToggle();
});

