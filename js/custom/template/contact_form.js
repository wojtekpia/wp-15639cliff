app.templates.contact_form = "\
<div id=\"contact-form\" title=\"Contact <%= listing.agent.name.first %> about <%= listing.address.line %>\">\
    <p class=\"validateTips\">All form fields are required.</p>\
    <form>\
    <fieldset>\
        <label for=\"firstName\">First Name</label>\
        <input type=\"text\" name=\"firstName\" id=\"firstName\" class=\"text ui-widget-content ui-corner-all\" />\
        <label for=\"lastName\">Last Name</label>\
        <input type=\"text\" name=\"lastName\" id=\"lastName\" class=\"text ui-widget-content ui-corner-all\" />\
        <label for=\"email\">Email</label>\
        <input type=\"text\" name=\"email\" id=\"email\" value=\"\" class=\"text ui-widget-content ui-corner-all\" />\
        <label for=\"phone\">Phone</label>\
        <input type=\"text\" name=\"phone\" id=\"phone\" value=\"\" class=\"text ui-widget-content ui-corner-all\" />\
        <label for=\"message\">Message</label>\
        <input type=\"text\" name=\"message\" id=\"message\" value=\"\" class=\"text ui-widget-content ui-corner-all\" />\
    </fieldset>\
    </form>\
</div>\
"