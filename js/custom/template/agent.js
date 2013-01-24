widgets.agent = {
	template:"\
<div class=\"next_steps_separator\"></div>\
<div class=\"link_button\">\
Presented by: <%= agent.name.full %>\
<img src=\"<%= agent.photo.href %>\"/>\
<%= agent.slogan %>\
<%= agent.phone[0].number %>\
<a href=\"<%= agent.href %>\">More about <%= agent.name.first %></a>\
</div>\
<div class=\"next_steps_separator\"></div>\
<div><img width='90px' src=\"<%= agent.office.photo.href %>\"/></div>\
<div><%= agent.office.slogan %></div>\
",

	render: function(selector,agent) {
		var template = _.template(this.template);
		var html = template({'agent' : agent});
		$(selector).html(html);
	}
};
