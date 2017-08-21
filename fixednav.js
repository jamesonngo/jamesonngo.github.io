$(document).ready(function () {

	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > $(window).height() * 0.95) {
			$('#barr').fadeIn("slow").addClass('barrfixed');

		}
		if ($(window).scrollTop() < $(window).height() * 0.95) {
			$('#barr').fadeOut("slow");
		}
	});
});
