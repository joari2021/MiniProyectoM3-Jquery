$(document).ready(function() {
	$('.contenedor-slideshow li').click(function(e){
		e.preventDefault();
		
		if ($(this).hasClass('activado')) {

			$(this).removeClass('activado');
			$(this).children('div').slideUp();
			$(this).children('a').children('i').removeClass('fa-chevron-up');
			$(this).children('a').children('i').removeAttr('aria-hidden','true');
			$(this).children('a').children('i').addClass('fa-chevron-down');

		} else {
			$('.contenedor-slideshow li div').slideUp();
			$('.contenedor-slideshow li').removeClass('activado');
			$('.contenedor-slideshow li a i').removeClass('fa-chevron-up');
			$('.contenedor-slideshow li a i').removeAttr('aria-hidden','true');
			$('.contenedor-slideshow li a i').addClass('fa-chevron-down');
			$(this).children('a').children('i').removeClass('fa-chevron-down');
			$(this).children('a').children('i').addClass('fa-chevron-up');
			$(this).children('a').children('i').attr("aria-hidden","true");
			$(this).addClass('activado');
			$(this).children('div').slideDown();
		}
	});
});