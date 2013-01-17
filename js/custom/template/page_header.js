widgets.page_header = {
	template:"\
<div class=\"content\">\
<h4>Executive ocean view living in White Rock</h4>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};
