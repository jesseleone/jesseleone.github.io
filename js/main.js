function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$('#containerOne .linkMore').click(function(){
	scrollToAnchor('containerTwoAnchor');
});

$('#containerThree .linkMore').click(function(){
	scrollToAnchor('containerFourAnchor');
});

