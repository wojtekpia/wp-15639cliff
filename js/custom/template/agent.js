widgets.agent = {
    template: "\
<div class=\"next_steps_separator\"></div>\
<div class=\"agent_details\">\
<div class=\"agent_label\">Presented by:</div> <div class=\"agent_name\"><%= agent.name.full %></div>\
<div class=\"agent_img\"><img src=\"<%= agent.photo.href %>\"/></div>\
    <div class=\"agent_info\">\
        <div class=\"agent_slogan\"><%= agent.slogan %></div>\
        <% for(var j = 0; j < agent.phone.length; j++){ %>\
            <div class=\"agent_label\"><%= agent.phone[j].type %>:</div>\
            <div class=\"agent_phone\"><%= agent.phone[j].number %></div>\
        <% } %>\
        <a href=\"<%= agent.href %>\">More about <%= agent.name.first %></a>\
    </div>\
</div>\
<div class=\"next_steps_separator\"></div>\
<div>\
    <div class=\"agent_img\"><img width='90px' src=\"<%= agent.office.photo.href %>\"/></div>\
    <div class=\"agent_info\">\
        <div class=\"agent_slogan\"><%= agent.office.slogan %></div>\
    </div>\
</div>\
",

    render: function (selector, agent) {
        var template = _.template(this.template);
        var html = template({ 'agent': agent });
        $(selector).html(html);
    }
};
