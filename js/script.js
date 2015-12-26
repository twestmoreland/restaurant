$(document).ready(function(){
	$('a.overlay.center').mouseover(function(){
		$('.overlay.center').addClass('center-jqhover');
	});

	$('a.overlay.center').mouseout(function(){
		$('.overlay.center').removeClass('center-jqhover');
	});

	$('.overlay.left, .mainnav-submenu').mouseover(function(){
		$('.hidden').removeClass('hidden');
		$('.overlay.left').addClass('overlay-jqhover');
	});

	$('.overlay.left').mouseout(function(){
		$('.mainnav-submenu').addClass('hidden');
		$('.overlay.left').removeClass('overlay-jqhover');
	});
});