// This .js file is for all things on the Resume page for the website

var experience_bool_map = { "wolve_bool": false, "mdp_bool": false, "ak_bool": false, "eecs_183_bool": false };
var newHTML;
var oldHeight = 0;
var done = true;

function resume_info()
{
	// Append special centered bio-wrapper
	$('#col-9').append("<div class=\"bio-wrapper-center\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"the-code-header white center thin-underline-orange\">Resume</p>");

	// Closing div
	$('#col-9').append("</div>");
}

$(document).delegate('#experience-wolverine-trading', 'click touchstart', function(event)
{
	show_experience('#wolverine-trading-div', '#experience-wolverine-trading', '#experience-wt-text', 'wolve_bool', wolverine_trading_info_text, wolverine_trading_info);
});

function show_experience(experience_div, experience_id, experience_text_id, bool_index, text_info_func, show_text_func)
{
	if (!done) 
	{ // Stopping animation from happening while one currently active
		return;
	}
	done = false;

	// Bool tests if already opened, thus close
	if (experience_bool_map[bool_index]) 
	{ // Closing
		experience_bool_map[bool_index] = false;

		// Animation for removing text
		$(experience_div).velocity({
			opacity: 0
		}, 300, function() {
			// Animation complete, now shrink and delete
			$(experience_div).remove();
		});

		// Animation for shinking div
		console.log("old height is: " + oldHeight);
		$(experience_id).velocity({
			height: oldHeight
		}, 500, function() {
			done = true;
		});

		// Animation for moving text div
		$(experience_text_id).velocity({
			top: "+=" + (((parseInt($(experience_id).css('top')) + oldHeight) / 2) - (parseInt($(experience_text_id).css('height')) / 2))
		}, 500);
	}
	else 
	{ // Opening
		experience_bool_map[bool_index] = true;

		newHTML = $("<div id=\"temp_sizer\" style=\"position : relative;\">" + text_info_func() + "</div>").appendTo('#experience-wrapper');
		oldHeight = $(experience_id).height();
		var newHeight = newHTML.height() + 10; // Padding
		
		// Delete temp div
		$('#temp_sizer').remove();

		$(experience_id).velocity({
			height: newHeight
		}, 500, function() {
			// Create wrapper, substring(1) because experience_div has "#" in front of it.
			$(experience_id).append("<div id=\"" + experience_div.substring(1) + "\">");

			// Set opacity to zero
			$(experience_div).css('opacity', '0');
			$(experience_div).css('margin-left', '4%');

			// Insert actual data
			show_text_func();

			// End div
			$(experience_id).append("</div>");

			// Animation to show text
			$(experience_div).velocity({
				opacity: 1,
			}, 300, function() {
				done = true;
			});
		});

		$(experience_text_id).velocity({
			top: $(experience_id).offset().top
		}, 500, function() {
			console.log("DONE");
		});
	}
}

function wolverine_trading_info() {
	$('#wolverine-trading-div').append("<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Software Engineer Intern</span></b> with <b>Wolverine Trading, LLC</b><br>Chicago, IL | Summer '16</p>\
							<p class=\"white text-body-raleway-subtext line-height-change\" style=\"left: 0px\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago's CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to simulate TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in <b><span class=\"green\">agile development environment</span></b> entailing daily stand-upsand bi-weekly retrospectives.</span></p>");
}

function wolverine_trading_info_text() {
	return "<p class=\"white text-body-raleway center\"><b><span class=\"white\">Software Engineer Intern</span></b> with <b>Wolverine Trading, LLC</b><br>Chicago, IL | Summer '16</p>\
			<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago's CME Exchanges.</span></p>\
			<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</span></p>\
			<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to simulate TCP/UDP connections for the emulator.</span></p>\
			<p class=\"white text-body-raleway-subtext line-height-change\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in <b><span class=\"green\">agile development environment</span></b> entailing daily stand-upsand bi-weekly retrospectives.</span></p>";
}