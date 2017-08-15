$(document).ready(function(){
	$('.menu-item').click(function(){
		$('.menu a').removeClass('active');
		$(this).addClass('active');
	});
});