
$(window).on("scroll", function() {
	var a = $(this).scrollTop();
	if (a > 400) {
		$("header").addClass("small")
	}
	if (a < 400) {
		$("header").removeClass("small")
	}
});

//scroll smooth
(function() {
	const scrollLinks = document.querySelectorAll('a.scroll-link');
	for (let i = 0; i < scrollLinks.length; i++)  {
		scrollLinks[i].addEventListener('click', function(e) {
			e.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

		});
	}
})();

$ (function() {
	// burger button and open mobile nav
	$('.burger-btn').on('click', () => {
		$('.header').toggleClass('mobile');
	})
})

// show-hide tooltips
let points = document.querySelectorAll('.point');

points.forEach( (elem) => {
	elem.addEventListener('mouseenter', () => {
		elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', () => {
		elem.classList.remove('active');
	})
})
// show hide popups


let overlay = document.querySelector('.overlay'),
	btnTiming = document.querySelector('.btn-timing'),
	btnSpeaker = document.querySelector('.btn-speaker'),
	close = document.querySelector('.popup-close'),
	html = document.getElementsByTagName('html')[0],
	mainWrap = document.querySelector('.main-wrap');

btnTiming.addEventListener('click', () => {
	overlay.classList.add('open-timing-popup');
	html.classList.add('hidden');
	close.addEventListener('click', () => {
		overlay.classList.remove('open-timing-popup');
		html.classList.remove('hidden');
	})
})

btnSpeaker.addEventListener('click', () => {
	overlay.classList.add('open-speaker-popup');
	html.classList.add('hidden');
	close.addEventListener('click', () => {
		overlay.classList.remove('open-speaker-popup');
		html.classList.remove('hidden');
	})
})


new WOW().init();

