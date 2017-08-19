function about() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (resume.style.display !== 'none') {
        $("#resume").fadeOut("slow");
		$("#about").delay(500).fadeIn("slow");
    } 
	    if (works.style.display !== 'none') {
        $("#works").fadeOut("slow");
		$("#about").delay(500).fadeIn("slow");
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut("slow");
		$("#about").delay(500).fadeIn("slow");
    } 
	else {
        $("#about").delay(500).fadeIn("slow");
    }
};

function resume() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut("slow");
		$("#resume").delay(500).fadeIn("slow");
    } 
	if (works.style.display !== 'none') {
        $("#works").fadeOut("slow");
		$("#resume").delay(500).fadeIn("slow");
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut("slow");
		$("#resume").delay(500).fadeIn("slow");
    } 
	else {
        $("#resume").delay(500).fadeIn("slow");
    }
};

function works() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut("slow");
		$("#works").delay(500).fadeIn("slow");
    } 
	if (resume.style.display !== 'none') {
        $("#resume").fadeOut("slow");
		$("#works").delay(500).fadeIn("slow");
    } 
	    if (contact.style.display !== 'none') {
        $("#contact").fadeOut("slow");
		$("#works").delay(500).fadeIn("slow");
    } 
	else {
		$("#works").delay(500).fadeIn("slow");
    }
};

function contact() {
    var resume = document.getElementById('resume');
	var about = document.getElementById('about');
	var works = document.getElementById('works');
	var contact = document.getElementById('contact');
	
    if (about.style.display !== 'none') {
        $("#about").fadeOut("slow");
		$("#contact").delay(500).fadeIn("slow");
    } 
	if (resume.style.display !== 'none') {
        $("#resume").fadeOut("slow");
		$("#contact").delay(500).fadeIn("slow");
    } 
	    if (works.style.display !== 'none') {
        $("#works").fadeOut("slow");
		$("#contact").delay(500).fadeIn("slow");
    } 
	else {
		$("#contact").delay(500).fadeIn("slow");
    }
};

function webresume() {
    var webresume = document.getElementById('webresume');
	
    if (webresume.style.display === 'none') {
        $("#webresume").fadeIn("slow");
	}
	else {
		$("#webresume").fadeOut("slow");
    }
};

function webresume2() {
    var webresume = document.getElementById('webresume');
	
    if (webresume.style.display !== 'none') {
        $("#webresume").fadeOut("slow");
	}
	else {
		$("#webresume").fadeOut("slow");
    }
};