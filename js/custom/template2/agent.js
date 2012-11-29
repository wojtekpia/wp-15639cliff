widgets.agent = {
	template:"\
<div>\
<%= agent.name.full %>\
<img src=\"<%= agent.photo.href %>\"/>\
<%= agent.slogan %>\
<a href=\"<%= agent.href %>\">website</a>\
</div>\
",

	render: function(selector,agent) {
		var template = _.template(this.template);
		var html = template({'agent' : agent});
		$(selector).html(html);
	}
};
