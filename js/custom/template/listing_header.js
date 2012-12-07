widgets.listing_header = {
	template:"\
<div id=\"nav-wrapper\">\
	<nav id=\"nav\" class=\"content\">\
		<div id=\"summary-stats\">\
			<div id=\"top-stats\">\
				<div class=\"price-block\">\
					<span class=\"main-stat\"><%= listing.address.line %></span>\
					<span class=\"sub-stat\"><%= listing.address.city %>, <%= listing.address.state_code %> <%= listing.address.postal_code %></span>\
				</div>\
				<div class=\"info-block-wrapper\">\
					<div class=\"info-block\">\
						<span class=\"main-stat\"><%= listing.price.toMoney() %></span>\
						<span class=\"sub-stat\">Price</span>\
					</div>\
					<div class=\"info-block\">\
						<span class=\"main-stat\"><%= listing.bed %></span>\
						<span class=\"sub-stat\">Beds</span>\
					</div>\
					<div class=\"info-block\">\
						<span class=\"main-stat\"><%= listing.bath.total %></span>\
						<span class=\"sub-stat\">Baths</span>\
					</div>\
					<div class=\"info-block\">\
						<span class=\"main-stat\"><%= listing.sqft.toSqft() %></span>\
						<span class=\"sub-stat\"><%= (listing.price / listing.sqft).toMoney() %> / Sq. Ft.</span>\
					</div>\
				</div>\
			</div>\
			<div id=\"bottom-stats\">\
				<div class=\"price-block\">\
					<span class=\"label\">Status:</span><span class=\"value\"><%= listing.status %></span>\
				</div>\
				<div class=\"info-block-wrapper\">\
					<span class=\"label\">Built:</span><span class=\"value\"><%= listing.year_built %></span>\
					<span class=\"label\">Lot Size:</span><span class=\"value\"><%= listing.lot.sqft.toLotSize() %></span>\
				</div>\
			</div>\
		</div>\
		<div class=\"progress-bar-wrapper page-width \">\
			<ul>\
				<li id=\"listing_overview_nav\"><a href=\"#listing_overview\" target=\"_self\">Overview</a></li>\
				<li id=\"listing_features_nav\"><a href=\"#listing_features\" target=\"_self\">Property Details</a></li>\
				<li id=\"schools_nav\"><a href=\"#schools\" target=\"_self\">Schools</a></li>\
				<li id=\"neighborhood_nav\"><a href=\"#neighborhoods\" target=\"_self\">Neighborhood</a></li>\
				<li id=\"designer_nav\"><a href=\"#designer\" target=\"_self\">Designer</a></li>\
				<li id=\"builder_nav\"><a href=\"#builder\" target=\"_self\">Builder</a></li>\
			</ul>\
			<div id=\"nav_bar\" class=\"progress-bar theme-bottom-border\"></div>\
		</div>\
	</nav>\
</div>\
",

    // first element must be first visually. it's used as the minimum.
	navDivToBodyDivMapping : [
		{"nav":"listing_overview_nav","body":"listing_overview"},
		{"nav":"listing_features_nav","body":"listing_features"},
		{"nav":"schools_nav","body":"schools"},
		{"nav":"neighborhood_nav","body":"neighborhoods"},
		{"nav":"designer_nav","body":"designer"},
		{"nav":"builder_nav","body":"builder"}
	],

	render: function(selector,listing) {

		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);
		
		$(selector).waypoint(function(event, direction) {
			$(this).parent().toggleClass('sticky', direction === "down");
			event.stopPropagation();
		});
		
		$(window).scroll(widgets.listing_header.onScroll);
	},
	
    onScroll: function(eventData) {
    	var currentPosition = $(window).scrollTop() + $("#listing_header").height();

    	var activeNavBodyMap = null;
    	var verticalPercentIntoDiv = 0.0;
    		
    	for(var i = 0; i < widgets.listing_header.navDivToBodyDivMapping.length; i++) {
    		var bodyDiv = $("#" + widgets.listing_header.navDivToBodyDivMapping[i].body);
    		var bodyTop = bodyDiv.offset().top;
    		var bodyBottom = bodyTop + bodyDiv.height();
    		
    		if(currentPosition > bodyTop && currentPosition <= bodyBottom) {
    			activeNavBodyMap = widgets.listing_header.navDivToBodyDivMapping[i];
    			verticalPercentIntoDiv = (currentPosition - bodyTop) / (bodyBottom - bodyTop);
    			break;
    		}
    	}
    	
    	if(activeNavBodyMap != null) {
    		var navDiv = $("#" + activeNavBodyMap.nav);
    		var navLeft = navDiv.position().left;
    		var left = (verticalPercentIntoDiv*(navDiv.outerWidth()) + navLeft);
    		var firstNav = $("#" + widgets.listing_header.navDivToBodyDivMapping[0].nav);
    		var minLeft = firstNav.position().left + (firstNav.outerWidth()/2);
    		
    		left = Math.max(minLeft, left);
    		$("#nav_bar").css('left', left + 'px');
    		
    		$(".active_nav").removeClass("active_nav");
    		navDiv.addClass("active_nav");
    	}
    },
    
    resetNavArrow : function() {
    	// TODO: compute instead of hard-code. 
		//var firstNav = $("#" + widgets.listing_header.navDivToBodyDivMapping[0].nav);
		//var minLeft = firstNav.position().left + (firstNav.outerWidth()/2);
    	//$("#nav_bar").css('left', minLeft + 'px');
    	$("#nav_bar").css('left', '227.5px');
    }
};
