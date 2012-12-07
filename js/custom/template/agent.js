widgets.agent = {
	template:"\
<div class=\"next_steps_separator\"></div>\
<div class=\"link_button\">\
Presented by: <%= agent.name.full %>\
<img src=\"<%= agent.photo.href %>\"/>\
<div class=\"next_steps_separator\"></div>\
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
