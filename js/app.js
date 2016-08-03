//particlesJS.load('particles', 'assets/particles.json');

$(document).ready(function($) {

	//Loading animation
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);

});

function showMenu() {
	$("#burger").addClass("cross");
	$("#menu").addClass("open");
}

function hideMenu() {
	$("#burger").removeClass("cross");
	$("#menu").removeClass("open");
}

//MENU: Animate on click
$("#burger").click(function() {
  if(!$(this).hasClass("cross")) {
		showMenu();
	} else {
		hideMenu();
	}
});

//MENU: Hide on content click
$("#content").click(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});

//MENU: Hide on scroll
$(window).scroll(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});
