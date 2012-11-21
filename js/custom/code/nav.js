var nav = {
    onScroll: function(eventData) {
    	// TODO: this needs to be based on a set of known anchors instead of purely linear.
    	//alert(eventData);
    	// get width of nav bar
    	var navWidth = $("#nav_table").width();
    	// get current vertical location
    	var pageHeight = $(document).height();
    	var screenTop = $(document).scrollTop();
    	
    	$("#nav_bar").css('left',screenTop/pageHeight*navWidth + 'px');
    },
};