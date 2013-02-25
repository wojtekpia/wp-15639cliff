widgets.page_header = {
	template:"\
<div class=\"content\">\
<h1>Executive ocean view living in White Rock</h1>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};
