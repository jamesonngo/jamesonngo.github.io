$(document).ready(function () {

	$(window).scroll(function () {
		//if you hard code, then use console
		//.log to determine when you want the 
		//nav bar to stick.  
		var heighth = document.getElementById('header').offsetHeight;
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > heighth * 0.90) {
			$('#barr').fadeIn("slow").addClass('barrfixed');

		}
		if ($(window).scrollTop() < heighth * 0.90) {
			$('#barr').fadeOut("slow");
		}
	});
});
