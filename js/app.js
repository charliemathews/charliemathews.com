particlesJS.load('particles-js', 'assets/particles.json');

$(document).ready(function($) {
	
	//hide preloader
	$("#loading").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").remove();}, 400);
	
	//intro animations
	$("#splash-name-wrap").delay(1400).animate({width: "100%"}, 1000);
	$("#particles-js").delay(1400).animate({opacity: 1}, 2000);
	$("#tag-1").delay(2400).animate({opacity: 1}, 400);
	$("#tag-2").delay(2800).animate({opacity: 1}, 400);
	$("#tag-3").delay(3200).animate({opacity: 1}, 400);
	
});

/*$("header").hover(function() {
	$("#arcs").stop().animate({opacity: 0.5}, 200, function(){
	$(".arc").animate({'min-width': "520px", 'min-height': "520px" }, 600);
	});
}, function() {
	$("#arcs").stop().animate({opacity: 0}, 400, function(){
	$(".arc").animate({'min-width': "250px", 'min-height': "250px" }, 400);
	});
});*/
