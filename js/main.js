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


//NavBar
$('#portfolio').click(function(){
	scrollToAnchor('containerTwoAnchor');
});

$('#about').click(function(){
	scrollToAnchor('containerThreeAnchor');
});

$('#brands').click(function(){
	scrollToAnchor('containerFourAnchor');
});

$('#contact').click(function(){
	scrollToAnchor('containerFiveAnchor');
});


//Footer
$('#backToTop a').click(function(){
	scrollToAnchor('containerOneAnchor');
});

