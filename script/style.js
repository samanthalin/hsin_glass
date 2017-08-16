$(document).ready(function(){
	$('.menu-item').click(function(){
		$('.menu a').removeClass('active');
		$(this).addClass('active');
	});

	$('.menu-item').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });

	$('a[href*="#history"]').click(function(){
		$('#process').hide();
		$('#history').show();
		var h = $('#history').height();
		var nh = $('nav').height();
		var bh = $('.banner').height();
		$('.track').height(h + nh + bh);
	});

	$('a[href*="#process"]').click(function(){
		$('#history').hide();
		$('#process').show();
		var h = $('#process').height();
		var nh = $('nav').height();
		var bh = $('.banner').height();
		$('.track').height(h + nh + bh);
	});

});