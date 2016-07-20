//particlesJS.load('particles', 'assets/particles.json');

// handle loading animation
$(document).ready(function($) {
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);
});

function showMenu() {
	$("#burger").addClass("cross");
	$("#menu").addClass("open");
	$("#nav_curtain").animate({opacity:0.1}, 400);
	$("#fadeout").animate({opacity:0}, 100);
}

function hideMenu() {
	$("#burger").removeClass("cross");
	$("#menu").removeClass("open");
	$("#nav_curtain").animate({opacity:0}, 400);
	$("#fadeout").animate({opacity:1}, 600);
}

// menu animation
$("#burger").click(function() {
  if(!$(this).hasClass("cross")) {
		showMenu();
	} else {
		hideMenu();
	}
});

// hide menu if user clicks on content? need to improve.
$("#content").click(function() {
  if($("#burger").hasClass("cross")) {
		hideMenu();
	}
});
