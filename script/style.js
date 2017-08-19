$(document).ready(function () {

	var body = document.querySelector('body')
	var mysvg1 = document.querySelector('#mysvg1')
	var mysvg2 = document.querySelector('#mysvg2')
	// on init

	$('html,body').scrollTop(0);
	$('.scroll-btn').hide();
	// $('.scroll-btn').click(function(){
	// 	$(window).scrollTop(100)
	// });
	if ($(window).scrollTop() > 0) {
		body.style.overflow = 'scroll'
		$('html,body').scrollTop(0);
	} else {
		body.style.overflow = 'hidden'
	}
	$('.drop').hide();
	mysvg1.style.display = 'none';
	mysvg2.style.display = 'none';

	// on scroll

	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$('.int-nav').addClass('scroll-nav');
			$('.scroll-btn').hide();
		} else {
			$('.int-nav').removeClass('scroll-nav');
			$('.scroll-btn').show();
		}
	})

	// 
	var a = $('.track').height();
	$('#mysvg1').height(a - 20);
	$(document).animateScroll();
	var doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);
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
		mysvg1.style.display = 'block';
		mysvg2.style.display = 'none';
	});

	$('a[href*="#process"]').click(function () {
		$('#history').hide();
		$('#process').show();
		var h = $('#process').height();
		$('.track').height(h);
		mysvg1.style.display = 'none';
		mysvg2.style.display = 'block';


		$('#mysvg2').height($('.track').height() - 100)

	});

	//Svg 1
	function positionTheDot1() {

		// What percentage down the page are we document.body.scrollTop ? 
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		// Get path length
		var path = document.getElementById("theMotionPath1");
		var pathLen = path.getTotalLength();

		// Get the position of a point at <scrollPercentage> along the path.
		var pt = path.getPointAtLength(scrollPercentage * pathLen);
		//console.log(pt)
		// Position the red dot at this point
		var dot = document.getElementById("dot1");
		dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");

	};


	//Svg 2
	function positionTheDot2() {

		// What percentage down the page are we document.body.scrollTop ? 
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		// Get path length
		var path = document.getElementById("theMotionPath2");
		var pathLen = path.getTotalLength();

		// Get the position of a point at <scrollPercentage> along the path.
		var pt = path.getPointAtLength(scrollPercentage * pathLen);
		//console.log(pt)
		// Position the red dot at this point
		var dot = document.getElementById("dot2");
		dot.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");

	};


	// Update dot position when we get a scroll event.
	window.addEventListener("scroll", positionTheDot2);
	window.addEventListener("scroll", positionTheDot1);

	// Set the initial position of the dot.
	positionTheDot1();
	positionTheDot2();

	// target elements with the "draggable" class
	interact('.draggable')
		.draggable({
			// enable inertial throwing
			inertia: true,
			// keep the element within the area of it's parent
			restrict: {
				restriction: "parent",
				endOnly: true,
				elementRect: {
					top: 0,
					left: 0,
					bottom: 1,
					right: 1
				}
			},

			// call this function on every dragmove event
			onmove: dragMoveListener,
			// call this function on every dragend event
			onend: function (event) {
				var textEl = event.target.querySelector('p');

				textEl && (textEl.textContent =
					'moved a distance of ' +
					(Math.sqrt(event.dx * event.dx +
						event.dy * event.dy) | 0) + 'px');
			}
		});
	var ball = document.querySelector('.draggable')
	ball.addEventListener('click', function (e) {
		$('.drag').hide();
		$('.drop').show();
		$('.drop-place').addClass('shining');
		console.log('show drop here')
	})

	function dragMoveListener(event) {
		$('.drag').hide();
		$('.drop').show();
		$('.drop-place').addClass('shining');
		//console.log('show drop here')
		var target = event.target,
			// keep the dragged position in the data-x/data-y attributes
			x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
			y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

		// translate the element
		target.style.webkitTransform =
			target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';

		// update the posiion attributes
		target.setAttribute('data-x', x);
		target.setAttribute('data-y', y);
	}

	// this is used later in the resizing demo
	window.dragMoveListener = dragMoveListener;

	// enable draggables to be dropped into this
	interact('.dropzone').dropzone({
		// only accept elements matching this CSS selector
		accept: '.drag-drop',
		// Require a 75% element overlap for a drop to be possible
		overlap: 0.75,

		// listen for drop related events:

		ondropactivate: function (event) {
			// add active dropzone feedback
			event.target.classList.add('drop-active');
		},
		ondragenter: function (event) {
			var draggableElement = event.relatedTarget,
				dropzoneElement = event.target;

			// feedback the possibility of a drop
			dropzoneElement.classList.add('drop-target');
			draggableElement.classList.add('can-drop');
			//draggableElement.textContent = 'Dragged in';
		},
		ondragleave: function (event) {
			// remove the drop feedback style
			event.target.classList.remove('drop-target');
			event.relatedTarget.classList.remove('can-drop');
			//event.relatedTarget.textContent = 'Dragged out';
		},
		ondrop: function (event) {
			// event.relatedTarget.textContent = 'Dropped';
			event.relatedTarget.classList.add('animation')
			console.log('droped in')
			$('.drop').hide();
			$('.drop-place').removeClass('shining');
			setTimeout(hideBall, 5000)
		},
		ondropdeactivate: function (event) {
			// remove active dropzone feedback
			event.target.classList.remove('drop-active');
			event.target.classList.remove('drop-target');
		}

	});

	function hideBall() {
		$('.scroll-btn').show();
		console.log('hideball')
		$('#dropzone').removeClass('dropzone')
		var ball = document.querySelector('.banner .ball')
		body.style.overflow = 'scroll'
		ball.style.display = 'none';
		mysvg1.style.display = 'block';
		setTimeout(mysvg1.classList.add('animated', 'slideInDown'),2000);
		mysvg2.style.display = 'none';

	}
});