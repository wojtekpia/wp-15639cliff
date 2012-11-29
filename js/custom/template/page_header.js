widgets.page_header = {
	template:"\
<div>\
<table><tr>\
<td><img src=\"http://www.sheenareimer.com/logo_cur_size.gif\"/></td>\
<td><h2>Your Local Real Estate Expert</h2>Providing Comprehensive Real Estate Services to Home Buyers and Sellers</td>\
</tr></table>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};
