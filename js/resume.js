// This .js file is for all things on the Resume page for the website

var experience_bool_map = { "wolve_bool": false, "mdp_bool": false, "ak_bool": false, "eecs_183_bool": false };
var experience_ids = [ "#experience-wolverine-trading", "#experience-mdp", "#experience-ak", "#experience-183" ];
var experience_text_ids = [ "#experience-wt-text", "#experience-mdp-text", "#experience-ak-text", "#experience-183-text" ];
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
	show_experience('#wolverine-trading-div', '#experience-wolverine-trading', '#experience-wt-text', 'wolve_bool', wolverine_trading_text, 0);
});

$(document).delegate('#experience-mdp', 'click touchstart', function(event)
{
	show_experience('#experience-mdp-div', '#experience-mdp', '#experience-mdp-text', 'mdp_bool', mdp_text, 1);
});

$(document).delegate('#experience-ak', 'click touchstart', function(event)
{
	show_experience('#experience-ak-div', '#experience-ak', '#experience-ak-text', 'ak_bool', ak_text, 2);
});

$(document).delegate('#experience-183', 'click touchstart', function(event)
{
	show_experience('#experience-183-div', '#experience-183', '#experience-183-text', 'eecs_183_bool', eecs_183_text, 3);
});

function show_experience(experience_div, experience_id, experience_text_id, bool_index, text_func, curr_map_index)
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
		var counter = 0;
		while (experience_id != experience_ids[counter])
		{ // Need to account for cascading divs below
			original_mid_val += ($('#experience-wrapper').height() * .21) - ($('#experience-wrapper').height() * .15);
			counter += 1;
		}

		$(experience_text_id).velocity({
			top: "+=" + original_mid_val
		}, 500);

		// Extend all other divs
		$.each(experience_ids, function(index, value) {
			if (index != curr_map_index)
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
			$(experience_div).css('margin-left', '3%');

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
		reposition_curr_text_on_expand(experience_id, experience_text_id, curr_map_index);

		// Shift all the other text
		reposition_text_on_expand(newHeight, curr_map_index);

		// Shrink all other divs
		$.each(experience_ids, function(index, value) {
			if (index != curr_map_index)
			{ // Don't want to shrink the current id
				$(value).velocity({
					height: "15%"
				}, 500);
			}
		});
	}
}

function reposition_curr_text_on_expand(experience_id, experience_text_id, curr_map_index)
{
	var text_offset = $(experience_id).offset().top;

	// Account for cascading shrinking divs above. 
	// If curr_map_index = 2, that means 2 div above that is shrinking. Thus, multiply by 2.
	text_offset -= curr_map_index * (($('#experience-wrapper').height() * .21) - ($('#experience-wrapper').height() * .15));

	$(experience_text_id).velocity({
		top: text_offset
	}, 500);
}

// Repositions the other experience-divs in reaction to a div click to expand
function reposition_text_on_expand(newHeight, curr_map_index)
{
	var expanded_div_height = newHeight + parseInt($('.experience').css("margin-top")); // height + marginTop
	var unexpanded_div_height = parseInt($('#experience-wrapper').height()) * .15 + parseInt($('.experience').css("margin-top")); // 15% height + marginTop
	var top_offset = $(experience_ids[0]).offset().top;	// To calculate mid value, first find top offset. Start at 0th div top.

	$.each(experience_text_ids, function(index, value) {
		if (index != curr_map_index)
		{
			// Logic for finding top_offset
			if (index == curr_map_index + 1)
			{	// This div is below the clicked-on div, add expanded_div_height
				top_offset += expanded_div_height;
				
				// If div isn't first one, also add unexpanded_div_height from previous div
				if (curr_map_index != 0)
					top_offset += unexpanded_div_height;	
			}
			else if (index > 0)
			{	// If div isn't special, just add unexpanded height
				top_offset += unexpanded_div_height;
			}

			// Calculate mid val which is top_offset + height / 2 - text_height / 2
			var mid_val = top_offset + ((parseInt($('#experience-wrapper').height()) * .15) / 2) - (parseInt($(value).css('height')) / 2);

			$(value).velocity({
				top: mid_val
			}, 500)
		}
	});
}

function wolverine_trading_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Software Engineer Intern</span></b> with <b>Wolverine Trading, LLC</b><br>Chicago, IL | Summer '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design and build software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to mimic real-world TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in an <b><span class=\"green\">agile development environment</span></b> which entails daily stand-ups and bi-weekly retrospectives.</span></p>";

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
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Multidisciplinary Design Program</span></b> with <b>MDA Information Systems</b><br>Ypsilanti, MI | Winter '16 - Fall '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Research, design, and implement a <span class=\"cyan\"><b>polar bear camera-based detection system</b></span> that ensures compliance with stakeholder's requirements.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Program a <span class=\"cyan\"><b>testing harness</b></span> to aid in the testing of the detection module's bounding box accuracy.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Research and utilize <span class=\"cyan\"><b>computer vision</b></span> to calculate speed, distance, and bearing (SBD) from bounding box movements. Then, design and implement a radar-like GUI system using <span class=\"cyan\"><b>OpenGL</b></span> to visually display the SBD.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Supply weekly <span class=\"cyan\"><b>written summaries and agendas</b></span> to the client, MDA Information Systems.</span></p>";

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
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Process Control Intern</span></b> with <b>AK Steel Corporation</b><br>Dearborn, MI | Summer '15</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Design and implement an <span class=\"pink\"><b>automated steel tracking system</b></span> for steel samples created in the mill.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Create a <span class=\"pink\"><b>Motorola scanner program</b></span> to be used for barcode scanning. Then, learn and use the <span class=\"pink\"><b>ZEBRA</b></span> barcode printing language to design the labels to be printed.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Research environment resilient <span class=\"pink\"><b>barcode labels</b></span> and proactively contact major industry dealers for purchasing.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Use <span class=\"pink\"><b>HTML, CSS, and Java</b></span> to update the steel statistical website in preparation for new tests.</span></p>";

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
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">EECS 183 Instructional Aide</span></b> with <b>University of Michigan</b><br>Ann Arbor, MI | Fall '15 - Winter '17</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Design, create, and teach a weekly <span class=\"orange\"><b>personalized discussion section</b></span> for a class of approximately forty students.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Hold and perform <span class=\"orange\"><b>statistical analysis</b></span> on weekly <span class=\"orange\"><b>office hours</b></span> for the course in order to help improve overall office hour structure.</span></span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Aid in the <span class=\"orange\"><b>creation and proofreading</b></span> of project specifications, exam questions, and course documentation. In addition, aid in the <span class=\"orange\"><b>proctoring and grading</b></span> of the exams in the course.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Participate and actively engage in <span class=\"orange\"><b>weekly staff meetings</b></span> by providing critical input to the course's health and direction.</span></p>";

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