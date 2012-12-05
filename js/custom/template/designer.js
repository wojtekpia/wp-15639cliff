widgets.designer = {
	template:"\
<div>\
<h2 id=\"details-header\" class=\"h2 inline\">Designer Info for <span class=\"address-string\"></span></h2>\
<div class=\"designer_details\">\
<img src=\"http://www.donetothenines.ca/pics/logo_main.jpg\"/>\
<a href=\"http://www.donetothenines.ca/index.html\">website</a>\
</div>\
<div class=\"designer_text\">\
<p>Done to the Nines is all about design projects. To designers Donna & Char, your home is like a blank canvas just waiting for color, texture and a ton of style. They believe that your home says a lot about who you are and should be a place you love.</p>\
<p>Donna Becher has worked  in interior design, clothing design and as an abstract artist for the past thirty years. Designing homes has always been a passion and she thrives having projects where she can put her creativity to work.</p>\
<p>The apple doesn't fall far from the tree for Char Lamboo, Donna's daughter. Growing up in a family that was always building new homes, Char was able to have input in these processes and brought her own idea's and style into the mix.</p>\
<p>Donna and Char work together as a design team and love every aspect of the design process. Together they compliment each other with their abilities and are dedicated to designing spaces that meet your needs while being both practical and fashionable.</p>\
</div>\
</div>\
",

	render: function(selector) {
		var template = _.template(this.template);
		var html = template();
		$(selector).html(html);
	}
};

