function scrollToAnchor(aid){
    var aTag = $("h2[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#summary").click(function() {
   scrollToAnchor('summary');
})

;