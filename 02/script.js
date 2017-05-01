jQuery(document).ready(function(){	
	jQuery(window).scroll(function () {
	    var scrollTop = jQuery(window).scrollTop();
	    if (scrollTop < 70) {
	        jQuery('hero').css({
	        	'height': "165px"
	    	});
	    } else {
	        jQuery('hero').css({
	        	"height": "65px"
	    	});
	    }
	});
});