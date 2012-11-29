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
    	// TODO: this needs to be based on a set of known anchors instead of purely linear.
    	// get width of nav bar
    	var navDivs = ["listing_overview_nav","listing_features_nav","schools_nav","neighborhood_nav","designer_nav","builder_nav"];
    	//for(var i=0; i < navDivs.length; i++) {
    		//alert($("#" + navDivs[i]).width());
    	//}
    	
    	var navWidthStart = $("#listing_overview_nav").position().left;
    	var navWidthEnd = $("#builder_nav").position().left + $("#builder_nav").width();

    	var navWidth = $("#main-nav-holder").width();
    	// get current vertical location
    	var pageHeight = $(document).height();
    	var screenTop = $(document).scrollTop();
    	
    	$("#nav_bar").css('left',(screenTop/pageHeight*(navWidthEnd-navWidthStart) + navWidthStart + $("#builder_nav").width()/2) + 'px');
    }
};
