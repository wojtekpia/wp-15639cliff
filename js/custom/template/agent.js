widgets.agent = {
	template:"\
<div class=\"link_button\">\
<%= agent.name.full %>\
<img src=\"<%= agent.photo.href %>\"/>\
<%= agent.slogan %>\
<a href=\"<%= agent.href %>\">More about <%= agent.name.first %></a>\
</div>\
",

	render: function(selector,agent) {
		var template = _.template(this.template);
		var html = template({'agent' : agent});
		$(selector).html(html);
	}
};
