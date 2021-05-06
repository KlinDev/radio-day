// Show the first tab and hide the rest
// $('#tabs-nav li:first-child').addClass('active');
// $('.tab-content').hide();
// $('.tab-content:first').show();

// Click function
// $('#tabs-nav li').click(function(){
//   $('#tabs-nav li').removeClass('active');
//   $(this).addClass('active');
//   $('.tab-content').hide();
  
//   var activeTab = $(this).find('a').attr('href');
//   $(activeTab).fadeIn();
//   return false;
// });

// set fixed header
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

let points = document.querySelectorAll('.point');

points.forEach( (elem) => {
	elem.addEventListener('mouseenter', () => {
			elem.classList.add('active');
	});
	elem.addEventListener('mouseleave', () => {
		elem.classList.remove('active');
})
})