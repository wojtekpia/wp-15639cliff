widgets.page_header = {
	template:"\
<div class=\"content\">\
<table><tr>\
<td><img src=\"images/pier.jpg\" height=\"200px\"/></td></tr>\
<tr><td><h2>Your Local Real Estate Expert</h2>Providing Comprehensive Real Estate Services to Home Buyers and Sellers</td>\
</tr></table>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};
