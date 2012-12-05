widgets.listing_features = {
	template:"\
<div class=\"listing_features\">\
<h2 id=\"details-header\" class=\"h2 inline\">Property Details for <span class=\"address-string\"></span></h2>\
<% for(var i = 0; i < listing.features.length; i++){ %>\
	<div class=\"master_feature_group_title\"><%= listing.features[i].category %></div>\
	<div class=\"listing_features_to_columize\">\
		<ul>\
			<% for(var j = 0; j < listing.features[i].features.length; j++){ %>\
				<h4 class=\"feature_group_title\"><%= listing.features[i].features[j].title %></h4>\
				<% for(var k = 0; k < listing.features[i].features[j].features.length; k++){ %>\
					<li><%= listing.features[i].features[j].features[k] %></li>\
				<% } %>\
			<% } %>\
		</ul>\
	</div>\
<% } %>\
</div>\
",

	render: function(selector,listing) {
		var template = _.template(this.template);
		var html = template({'listing' : listing});
		$(selector).html(html);

		$('.listing_features_to_columize').columnize({width:300});
	}
};
