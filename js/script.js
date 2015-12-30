$(document).ready(function(){
	//-----------------Main Navigation--------------------------------
	$('a.overlay.center').mouseover(function(){
		$('.overlay.center').addClass('center-jqhover');
	});
	$('a.overlay.center').mouseout(function(){
		$('.overlay.center').removeClass('center-jqhover');
	});
	$('.overlay.left, .mainnav-submenu').mouseover(function(){
		$('.mainnav-submenu').removeClass('hidden');
		$('.overlay.left').addClass('overlay-jqhover');
	});
	$('.overlay.left').mouseout(function(){
		$('.mainnav-submenu').addClass('hidden');
		$('.overlay.left').removeClass('overlay-jqhover');
	});


	//-----------------GADGETS SIDE NAVIGATION--------------------------------
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
	$('.sidenav').followTo(1066);
	$(".tongs").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#tongs").offset().top
	    }, 2000);
	    return false;
	});
	$(".spatula").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#spatula").offset().top
	    }, 2000);
	    return false;
	});
	$(".thermometer").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#thermometer").offset().top
	    }, 2000);
	    return false;
	});
	$(".grillbrush").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#grillbrush").offset().top
	    }, 2000);
	    return false;
	});
	$(".grillinggloves").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#grillinggloves").offset().top
	    }, 2000);
	    return false;
	});
	$(".tongs").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#tongs").offset().top
	    }, 2000);
	    return false;
	});
	$(".bastingbrush").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#bastingbrush").offset().top
	    }, 2000);
	    return false;
	});
	$(".charcoalchimney").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#charcoalchimney").offset().top
	    }, 2000);
	    return false;
	});
	$(".grillingfork").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#grillingfork").offset().top
	    }, 2000);
	    return false;
	});
	$(".garlicpress").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#garlicpress").offset().top
	    }, 2000);
	    return false;
	});
	$(".wineopener").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#wineopener").offset().top
	    }, 2000);
	    return false;
	});
	$(".canopener").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#canopener").offset().top
	    }, 2000);
	    return false;
	});
	$(".culinarytorch").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#culinarytorch").offset().top
	    }, 2000);
	    return false;
	});
	$(".saladspinner").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#saladspinner").offset().top
	    }, 2000);
	    return false;
	});


	//-----------------POP UP DIALOGS--------------------------------
	$('.submit').click(function(){
		$('.pop-up.contestsubmit').removeClass('hidden');
		$('.lightbox').removeClass('hidden');
		$('input').val('');
	});
	$('.ok').click(function(){
		$('.pop-up.contestsubmit').addClass('hidden');
		$('.lightbox').addClass('hidden');
		$('input').val('');
	});
	$('.inputbutton').click(function(){
		$('.pop-up.ingredient').removeClass('hidden');
		$('.lightbox').removeClass('hidden');
	});
	$('.submitrecipe').click(function(){
		$('.pop-up.ingredient').addClass('hidden');
		$('.pop-up.contestsubmit').removeClass('hidden');
		$('input').val('');
	});


	//-----------------ADDING INGREDIENTS AND COOKING STEPS--------------------------------	
    $('.button.ingredient').click(function(){
        var toAdd = $('input[name=ingredient]').val();
        
        $('.list').append('<li>' + toAdd + '</li>');
        $('input[name=ingredient]').val('');
    });

    $('.button.cookingsteps').click(function(){
        var toAdd = $('input[name=steps]').val();
        
        $('.steps').append('<li class="margintop-0">' + toAdd + '</li>');
        $('input[name=steps]').val('');
    });

});