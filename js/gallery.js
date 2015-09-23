// Turn off stupid slide-show
$(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });
});

// Keyboard controls
$(document).bind('keyup', function(e) {
	if(e.which==39){
		$('.carousel').carousel('next');
	}   
	else if(e.keyCode==37){
		$('.carousel').carousel('prev');
	}
});

