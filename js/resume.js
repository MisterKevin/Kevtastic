// This .js file is for all things on the Resume page for the website

var experience_bool_map = { "wolve_bool": false, "mdp_bool": false, "ak_bool": false, "eecs_183_bool": false };
var experience_ids = [ "#experience-wolverine-trading", "#experience-mdp", "#experience-ak", "#experience-183" ];
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
	show_experience('#wolverine-trading-div', '#experience-wolverine-trading', '#experience-wt-text', 'wolve_bool', wolverine_trading_text);
});

$(document).delegate('#experience-mdp', 'click touchstart', function(event)
{
	show_experience('#experience-mdp-div', '#experience-mdp', '#experience-mdp-text', 'mdp_bool', mdp_text);
});

$(document).delegate('#experience-ak', 'click touchstart', function(event)
{
	show_experience('#experience-ak-div', '#experience-ak', '#experience-ak-text', 'ak_bool', ak_text);
});

$(document).delegate('#experience-183', 'click touchstart', function(event)
{
	show_experience('#experience-183-div', '#experience-183', '#experience-183-text', 'eecs_183_bool', eecs_183_text);
});

function show_experience(experience_div, experience_id, experience_text_id, bool_index, text_func)
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
		$(experience_id).velocity({
			height: oldHeight
		}, 500, function() {
			done = true;
		});
		
		// Animation for moving text div back to center
		var original_mid_val = ((($('#experience-wrapper').height() * .21) / 2) - (parseInt($(experience_text_id).css('height')) / 2));
		if (experience_id != experience_ids[0]) // Check for shrinkage, if not first div
		{
			original_mid_val += ($('#experience-wrapper').height() * .21) - ($('#experience-wrapper').height() * .15);
		}

		$(experience_text_id).velocity({
			top: "+=" + original_mid_val
		}, 500);

		// Extend all other divs
		$.each(experience_ids, function(index, value) {
			if (value != experience_id)
			{ // Current id is already extended
				$(value).velocity({
					height: "21%"
				}, 500);
			}
		});
	}
	else 
	{ // Opening
		experience_bool_map[bool_index] = true;

		newHTML = $("<div id=\"temp_sizer\" style=\"position : relative;\">" + text_func(false) + "</div>").appendTo('#experience-wrapper');
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
			text_func(true);

			// End div
			$(experience_id).append("</div>");

			// Animation to show text
			$(experience_div).velocity({
				opacity: 1
			}, 300, function() {
				done = true;
			});
		});

		// Move current text
		var text_offset = $(experience_id).offset().top;
		
		if (experience_id != experience_ids[0])
		{ // Need to account for the div above it shrinking
			text_offset -= ($('#experience-wrapper').height() * .21) - ($('#experience-wrapper').height() * .15);
		}
		
		$(experience_text_id).velocity({
			top: text_offset
		}, 500);

		// Shrink all other divs
		$.each(experience_ids, function(index, value) {
			if (value != experience_id)
			{ // Don't want to shrink the current id
				$(value).velocity({
					height: "15%"
				}, 500);
			}
		});
	}
}

function wolverine_trading_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Software Engineer Intern</span></b> with <b>Wolverine Trading, LLC</b><br>Chicago, IL | Summer '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\" style=\"padding-right: 5%\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design and build software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to mimic real-world TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in an <b><span class=\"green\">agile development environment</span></b> which entails daily stand-ups and bi-weekly retrospectives.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#wolverine-trading-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function mdp_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Multidisciplinary Design Program</span></b> with <b>MDA Information Systems</b><br>Ypsilanti, MI | Winter '16 to Fall '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago's CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to simulate TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in <b><span class=\"green\">agile development environment</span></b> entailing daily stand-upsand bi-weekly retrospectives.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-mdp-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function ak_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Multidisciplinary Design Program</span></b> with <b>MDA Information Systems LLC</b><br>Ypsilanti, MI | Winter '16 to Fall '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago's CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to simulate TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in <b><span class=\"green\">agile development environment</span></b> entailing daily stand-upsand bi-weekly retrospectives.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-ak-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function eecs_183_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Multidisciplinary Design Program</span></b> with <b>MDA Information Systems LLC</b><br>Ypsilanti, MI | Winter '16 to Fall '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago's CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to simulate TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in <b><span class=\"green\">agile development environment</span></b> entailing daily stand-upsand bi-weekly retrospectives.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-183-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}