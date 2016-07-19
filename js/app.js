//particlesJS.load('particles', 'assets/particles.json');

// handle loading animation
$(document).ready(function($) {
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);
});

// menu animation
$("#burger").click(function() {
  if(!$(this).hasClass("cross")) {
		$(this).addClass("cross");
		$("#menu").addClass("open");
	} else {
		$(this).removeClass("cross");
		$("#menu").removeClass("open");
	}
});
