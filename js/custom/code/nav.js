var nav = {
    onScroll: function(eventData) {
    	// TODO: this needs to be based on a set of known anchors instead of purely linear.
    	// get width of nav bar
    	var navDivs = ["listing_overview_nav","listing_features_nav","schools_nav","neighborhood_nav","designer_nav","builder_nav"];
    	for(var i=0; i < navDivs.length; i++) {
    		//alert($("#" + navDivs[i]).width());
    	}
    	
    	var navWidthStart = $("#listing_overview_nav").position().left;
    	var navWidthEnd = $("#builder_nav").position().left + $("#builder_nav").width();

    	var navWidth = $("#main-nav-holder").width();
    	// get current vertical location
    	var pageHeight = $(document).height();
    	var screenTop = $(document).scrollTop();
    	
    	$("#nav_bar").css('left',(screenTop/pageHeight*(navWidthEnd-navWidthStart) + navWidthStart + $("#builder_nav").width()/2) + 'px');
    }
};