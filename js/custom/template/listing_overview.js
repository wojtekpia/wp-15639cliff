widgets.listing_overview = {
	template:"\
<div>\
	<div class=\"slider-wrapper theme-default controlnav-thumbs\">\
		<div id=\"listing-images\" class=\"nivoSlider\">\
			<% for(var photo_count = 1; photo_count <= listing.photo.count; photo_count++){ %>\
	        	<img src=\"<%= listing.photo.href.replace(\"{i}\",photo_count).replace(\"{s}\",\"l\") %>\" data-thumb=\"<%= listing.photo.href.replace(\"{i}\",photo_count).replace(\"{s}\",\"t\") %>\" alt=\"\"  />\
	        <% } %>\
	    </div>\
	</div>\
	<div class=\"listing_description\"><p><%= listing.description %></p>\
    <table>\
		<div class=\"overview-column\">\
			<ul>\
				<li><strong>Property Type</strong>: <%= listing.zoning %></li>\
				<li><strong>Style</strong>: <%= listing.style %></li>\
				<li><strong>Community</strong>: <%= listing.neighborhood %></li>\
				<li><strong>MLS #</strong> <%= listing.mls.listing.id %></li>\
				<li><strong>Courtesy of</strong>: <%= listing.agent.name.full %></li>\
				<li><strong>Source</strong>: <%= listing.mls.name %></li>\
			</ul>\
		</div>\
	</table>\
    </div>\
</div>\
",

	render: function(selector,listing) {
		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);

		$('.overview-column').columnize({ width: 300 });
		
		$("#listing-images").nivoSlider({
			        effect:"sliceUpDown",
			        slices:15,
			        boxCols:8,
			        boxRows:4,
			        animSpeed:200,
			        pauseTime:5000,
			        startSlide:0,
			        directionNav:true,
			        controlNav:true,
			        controlNavThumbs:true,
			        pauseOnHover:true,
			        manualAdvance:false
			    });
	}
};
