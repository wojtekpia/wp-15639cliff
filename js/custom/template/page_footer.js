widgets.page_footer = {
	template:"\
<footer><nav>\
		<ul>\
			<li><a class=\"top\" href=\"#\" title=\"Back to top\">Top</a></li>\
		</ul>\
</nav></footer>\
",

	render: function(selector,wrapperSelector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
		
		$('.top').addClass('hidden');
		$(wrapperSelector).waypoint(function(event, direction) {
			$('.top').toggleClass('hidden', direction === "up");
		}, {
			offset: '-100%'
		});
	}
};
