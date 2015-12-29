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

	$.fn.followTo = function (pos) {
	    var $this = this,
	        $window = $(window);

	    $window.scroll(function (e) {
	        if ($window.scrollTop() < pos) {
	            $this.css({
	                position: 'absolute',
	                top: pos
	            });
	        } else {
	            $this.css({
	                position: 'fixed',
	                top: 0
	            });
	        }
	    });
	};

	$('.sidenav').followTo(1072);


	$( "aside > ul > li > a" ).click(function() {
	 	alert( "Handler for .click() called." );
	 	('body').scrollTop(6000);
	});
});