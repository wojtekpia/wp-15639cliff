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
				<li id=\"listing_overview_nav\"><a href=\"#listing_overview_a\" target=\"_self\">Overview</a></li>\
				<li id=\"listing_features_nav\"><a href=\"#listing_features_a\" target=\"_self\">Property Details</a></li>\
				<li id=\"schools_nav\"><a href=\"#schools_a\" target=\"_self\">Schools</a></li>\
				<li id=\"neighborhood_nav\"><a href=\"#neighborhoods_a\" target=\"_self\">Neighborhood</a></li>\
				<li id=\"designer_nav\"><a href=\"#designer_a\" target=\"_self\">Designer</a></li>\
				<li id=\"builder_nav\"><a href=\"#builder_a\" target=\"_self\">Builder</a></li>\
			</ul>\
			<div id=\"nav_bar\" class=\"progress-bar theme-bottom-border\"></div>\
		</div>\
	</nav>\
</div>\
",

    // first element must be first visually. it's used as the minimum.
	navDivToBodyDivMapping : [
		{"nav":{"name":"listing_overview_nav", "left":0,"outer_width":0},"body":{"name":"listing_overview"}},
		{"nav":{"name":"listing_features_nav", "left":0,"outer_width":0},"body":{"name":"listing_features"}},
		{"nav":{"name":"schools_nav", "left":0,"outer_width":0},"body":{"name":"schools"}},
		{"nav":{"name":"neighborhood_nav", "left":0,"outer_width":0},"body":{"name":"neighborhoods"}},
		{"nav":{"name":"designer_nav", "left":0,"outer_width":0},"body":{"name":"designer"}},
		{"nav":{"name":"builder_nav", "left":0,"outer_width":0},"body":{"name":"builder"}}
	],

	render: function(selector,listing) {

		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);
		
		$(selector).waypoint(function(event, direction) {
			$(this).parent().toggleClass('sticky', direction === "down");
			event.stopPropagation();
		});

		// rather than using navDiv.position().left in computing nav arrow, cache those values ahead of time. they change (unnecessarily for my need) which 
		// causes the nav to jump around.
		widgets.listing_header.cacheNavPositions();
		$(window).scroll(widgets.listing_header.onScroll);
	},
	
	cacheNavPositions: function() {
		var navLeft = $("#nav").position().left;
		for(var i = 0; i < widgets.listing_header.navDivToBodyDivMapping.length; i++) {
			var navDiv = $("#" + widgets.listing_header.navDivToBodyDivMapping[i].nav.name);

			widgets.listing_header.navDivToBodyDivMapping[i].nav.left = navDiv.position().left - navLeft;
			widgets.listing_header.navDivToBodyDivMapping[i].nav.outer_width = navDiv.outerWidth();
		}
	},
	
    onScroll: function(eventData) {
    	var currentPosition = $(window).scrollTop() + $("#listing_header").height();

    	var activeNavBodyMap = null;
    	var verticalPercentIntoDiv = 0.0;
    	var mightBeTop = false;
    	var mightBeBottom = false;
    	
    	for(var i = 0; i < widgets.listing_header.navDivToBodyDivMapping.length; i++) {
    		var bodyDiv = $("#" + widgets.listing_header.navDivToBodyDivMapping[i].body.name);
    		var bodyTop = bodyDiv.offset().top;
    		var bodyBottom = bodyTop + bodyDiv.height();
    		
    		if(currentPosition > bodyTop && currentPosition <= bodyBottom) {
    			activeNavBodyMap = widgets.listing_header.navDivToBodyDivMapping[i];
    			verticalPercentIntoDiv = (currentPosition - bodyTop) / (bodyBottom - bodyTop);
    			break;
    		}

    		if(i == 0 && currentPosition < bodyTop) {
    			mightBeTop = true;
    		}
    		else if(i == (widgets.listing_header.navDivToBodyDivMapping.length-1) && currentPosition > bodyBottom) {
    			mightBeBottom = true;
    		}
    	}
    	
    	// top or bottom
    	if(activeNavBodyMap == null && mightBeTop == true)
    	{
    		activeNavBodyMap = widgets.listing_header.navDivToBodyDivMapping[0];
    		verticalPercentIntoDiv = 0.0;
    	}
    	if(activeNavBodyMap == null && mightBeTop == true)
    	{
    		activeNavBodyMap = widgets.listing_header.navDivToBodyDivMapping[widgets.listing_header.navDivToBodyDivMapping.length - 1];
    		verticalPercentIntoDiv = 1.0;
    	}

    	if(activeNavBodyMap != null) {
    		var navDiv = $("#" + activeNavBodyMap.nav.name);
    		//var navLeft = navDiv.position().left;
    		var navLeft = activeNavBodyMap.nav.left;
    		var left = (verticalPercentIntoDiv*(navDiv.outerWidth()) + navLeft);
    		var minLeft = widgets.listing_header.navDivToBodyDivMapping[0].nav.left + (widgets.listing_header.navDivToBodyDivMapping[0].nav.outer_width/2);
    		var maxLeft = widgets.listing_header.navDivToBodyDivMapping[widgets.listing_header.navDivToBodyDivMapping.length-1].nav.left + (widgets.listing_header.navDivToBodyDivMapping[widgets.listing_header.navDivToBodyDivMapping.length-1].nav.outer_width/2);

    		left = Math.min(Math.max(minLeft, left), maxLeft);
    		$("#nav_bar").css('left', left + 'px');
    		$(".active_nav").removeClass("active_nav");
    		navDiv.addClass("active_nav");
    	}
    }
};
