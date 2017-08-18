$(document).ready(function () {
// <<<<<<< HEAD
// =======
	$(document).animateScroll();
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
// >>>>>>> ad6f72f8cc6faac665ffa0d4bbf2b48b57cb3082
	// var controller = new ScrollMagic.Controller();
	$('.menu-item').click(function () {
		$('.menu a').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu-item').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 300);
	});

	$('a[href*="#history"]').click(function () {
		$('#process').hide();
		$('#history').show();
		var h = $('#history').height();
		$('.track').height(h);

	});

	$('a[href*="#process"]').click(function () {
		$('#history').hide();
		$('#process').show();
		var h = $('#process').height();
		$('.track').height(h);
		// $('.content .left').hide();
		// $('.content .right').hide();
//<<<<<<< HEAD
		//$('video').addClass('animated');

	});
	// var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 450 })
	// 	// animate color and top border in relation to scroll position
	// 	.setClassToggle("#trigger1", "zoomIn")
	// 	.addIndicators()
	// 	.addTo(controller);
//=======

//>>>>>>> ad6f72f8cc6faac665ffa0d4bbf2b48b57cb3082

	});
	// var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 450 })
	// 	// animate color and top border in relation to scroll position
	// 	.setClassToggle("#trigger1", "fadeIn")
	// 	.addTo(controller);

