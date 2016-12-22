// This .js file is for all things on the Resume page for the website

var current_opened_div = -1;
var text_funcs = [ wt_text, mdp_text, ak_text, eecs_183_text ];
var experience_divs = [ "#experience-wt-div", "#experience-mdp-div", "#experience-ak-div", "#experience-183-div" ];
var experience_ids = [ "#experience-wolverine-trading", "#experience-mdp", "#experience-ak", "#experience-183" ];
var experience_text_ids = [ "#experience-wt-text", "#experience-mdp-text", "#experience-ak-text", "#experience-183-text" ];
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
	show_experience(0);
});

$(document).delegate('#experience-mdp', 'click touchstart', function(event)
{
	show_experience(1);
});

$(document).delegate('#experience-ak', 'click touchstart', function(event)
{
	show_experience(2);
});

$(document).delegate('#experience-183', 'click touchstart', function(event)
{
	show_experience(3);
});

function show_experience(curr_map_index)
{
	if (!done) { return; }// Stopping animation from happening while one currently active
	done = false;

	// Bool tests if already opened, thus close
	if (curr_map_index == current_opened_div) 
	{ // Closing
		current_opened_div = -1;

		// Animation for fading away text text
		$(experience_divs[curr_map_index]).velocity({
			opacity: 0
		}, 300, function() {
			// Animation complete, now delete div
			$(experience_divs[curr_map_index]).remove();

			// Shrink current div
			shrink_curr_div(curr_map_index);

			// Shift all other text back to the middle of their divs
			reposition_all_text_on_shrink(newHeight, curr_map_index);

			// Expand all other divs
			morph_other_divs_on_shrink(curr_map_index);
		});

	}
	else 
	{ // Opening
		current_opened_div = curr_map_index;

		// Calculate height of clicked-on div
		var newHeight = calculate_new_height(curr_map_index);

		// Expand clicked-on div and display inner text
		expand_curr_div(newHeight, curr_map_index, experience_divs[curr_map_index]);

		// Move current text
		reposition_curr_text_on_expand(curr_map_index);

		// Shift all the other text
		reposition_other_text_on_expand(newHeight, curr_map_index);

		// Shrink all other divs
		morph_other_divs_on_expand(curr_map_index);
	}
}