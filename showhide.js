function about() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (resume.style.display !== 'none') {
        $("#resume").fadeOut(100);
		$("#about").delay(100).fadeIn(100);
    } 
	    if (works.style.display !== 'none') {
        $("#works").fadeOut(100);
		$("#about").delay(100).fadeIn(100);
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut(100);
		$("#about").delay(100).fadeIn(100);
    } 
	else {
        $("#about").delay(100).fadeIn(100);
    }
};

function resume() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut(100);
		$("#resume").delay(100).fadeIn(100);
    } 
	if (works.style.display !== 'none') {
        $("#works").fadeOut(100);
		$("#resume").delay(100).fadeIn(100);
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut(100);
		$("#resume").delay(100).fadeIn(100);
    } 
	else {
        $("#resume").delay(100).fadeIn(100);
    }
};

function works() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut(100);
		$("#works").delay(100).fadeIn(100);
    } 
	if (resume.style.display !== 'none') {
        $("#resume").fadeOut(100);
		$("#works").delay(100).fadeIn(100);
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut(100);
		$("#works").delay(100).fadeIn(100);
    } 
	else {
		$("#works").delay(100).fadeIn(100);
    }
};

function contact() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut(100);
		$("#contact").delay(100).fadeIn(100);
    } 
	if (resume.style.display !== 'none') {
        $("#resume").fadeOut(100);
		$("#contact").delay(100).fadeIn(100);
    } 
	    if (works.style.display !== 'none') {
        $("#works").fadeOut(100);
		$("#contact").delay(100).fadeIn(100);
    } 
	else {
		$("#contact").delay(100).fadeIn(100);
    }
};

function webresume() {
    var webresume = document.getElementById('webresume');
	
    if (webresume.style.display === 'none') {
        $("#webresume").fadeIn(100);
		$('#webresume').animatescroll();
	}
	else {
		$("#webresume").fadeOut(100);
		$('#top').animatescroll();
    }
};

function webresume2() {
    var webresume = document.getElementById('webresume');
	
    if (webresume.style.display !== 'none') {
        $("#webresume").fadeOut(100);
	}
	else {
		$("#webresume").fadeOut(100);
    }
};