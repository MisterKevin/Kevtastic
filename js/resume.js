// This .js file is for all things on the Resume page for the website

var current_opened_div = -1;
var text_funcs = [ wt_text, mdp_text, ak_text, eecs_183_text ];
var experience_divs = [ "#experience-wt-div", "#experience-mdp-div", "#experience-ak-div", "#experience-183-div" ];
var experience_ids = [ "#experience-wt", "#experience-mdp", "#experience-ak", "#experience-183" ];
var experience_text_ids = [ "#experience-wt-text", "#experience-mdp-text", "#experience-ak-text", "#experience-183-text" ];
var done = true;
var current_top = 0;

$(document).delegate('#experience-wt', 'click touchstart', function(event)
{
	show_experience(0);
});

$(document).delegate('#experience-wt', 'mouseenter mouseleave', function(event)
{
	mouse_hover(0, event);
});

$(document).delegate('#experience-mdp', 'click touchstart', function(event)
{
	show_experience(1);
});

$(document).delegate('#experience-mdp', 'mouseenter mouseleave', function(event)
{
	mouse_hover(1, event);
});

$(document).delegate('#experience-ak', 'click touchstart', function(event)
{
	show_experience(2);
});

$(document).delegate('#experience-ak', 'mouseenter mouseleave', function(event)
{
	mouse_hover(2, event);
});

$(document).delegate('#experience-183', 'click touchstart', function(event)
{
	show_experience(3);
});

$(document).delegate('#experience-183', 'mouseenter mouseleave', function(event)
{
	mouse_hover(3, event);
});

function mouse_hover(curr_map_index, event)
{
	if (current_opened_div >= 0 && curr_map_index == current_opened_div) { return; }
	if (event.type === 'mouseenter')
	{
		$(experience_ids[curr_map_index]).css('background-color', '#1a1a1a');
	}
	else 
	{
		$(experience_ids[curr_map_index]).css('background-color', '#0d0d0d');
	}
}

function show_experience(curr_map_index)
{
	// Stopping animation from happening while one currently active
	if (!done) { return; }
	done = false;

	if (current_opened_div >= 0)
	{ // Checking if div already opened
		// Animation for fading away text text
		$(experience_divs[current_opened_div]).velocity({
			opacity: 0
		}, 300, function() {
			// Animation complete, now delete div
			$(experience_divs[current_opened_div]).remove();

			// Shrink current div. This function will call sequential openings, as it controls the "done" variable.
			shrink_curr_div(current_opened_div, curr_map_index);

			// Shift all other text back to the middle of their divs
			reposition_all_text_on_shrink(newHeight, current_opened_div);

			// Expand all other divs
			morph_other_divs_on_shrink(current_opened_div)
		});
	}
	else 
	{ // Opening new div
		current_opened_div = curr_map_index;

		// Calculate height of clicked-on div
		var newHeight = calculate_new_height(curr_map_index);

		// Expand clicked-on div and display inner text
		expand_curr_div(newHeight, curr_map_index);

		// Move current text
		reposition_curr_text_on_expand(curr_map_index, false);

		// Shift all the other text
		reposition_other_text_on_expand(newHeight, curr_map_index);

		// Shrink all other divs
		morph_other_divs_on_expand(curr_map_index);
	}
}

// This function forces the text to be positioned correctly
function resume_position_texts()
{
	$('#experience-wt-text').css('top', $('#experience-wt').offset().top + (((parseInt($('#experience-wt').css('top')) + parseInt($('#experience-wt').css('height'))) / 2) - (parseInt($('#experience-wt-text').css('height')) / 2)));
	$('#experience-wt-text').css('left', $('#experience-wt').offset().left + (((parseInt($('#experience-wt').css('left')) + parseInt($('#experience-wt').css('width'))) / 2) - (parseInt($('#experience-wt-text').css('width')) / 2)));
	$('#experience-mdp-text').css('top', $('#experience-mdp').offset().top + (((parseInt($('#experience-mdp').css('top')) + parseInt($('#experience-mdp').css('height'))) / 2) - (parseInt($('#experience-mdp-text').css('height')) / 2)));
	$('#experience-mdp-text').css('left', $('#experience-mdp').offset().left + (((parseInt($('#experience-mdp').css('left')) + parseInt($('#experience-mdp').css('width'))) / 2) - (parseInt($('#experience-mdp-text').css('width')) / 2)));
	$('#experience-ak-text').css('top', $('#experience-ak').offset().top + (((parseInt($('#experience-ak').css('top')) + parseInt($('#experience-ak').css('height'))) / 2) - (parseInt($('#experience-ak-text').css('height')) / 2)));
	$('#experience-ak-text').css('left', $('#experience-ak').offset().left + (((parseInt($('#experience-ak').css('left')) + parseInt($('#experience-ak').css('width'))) / 2) - (parseInt($('#experience-ak-text').css('width')) / 2)));
	$('#experience-183-text').css('top', $('#experience-183').offset().top + (((parseInt($('#experience-183').css('top')) + parseInt($('#experience-183').css('height'))) / 2) - (parseInt($('#experience-183-text').css('height')) / 2)));
	$('#experience-183-text').css('left', $('#experience-183').offset().left + (((parseInt($('#experience-183').css('left')) + parseInt($('#experience-183').css('width'))) / 2) - (parseInt($('#experience-183-text').css('width')) / 2)));
}

// This function fades out the resume fixed text, used in index.js
function fade_out_resume()
{
	old_pos_resume = $(experience_text_ids[0]).offset().right; // Saving just one experience div is enough
	$.each(experience_text_ids, function(index, value) {
		$(value).velocity({
			"left": "+=10%"
		}, global_animation_time, global_ease_out);
	});

	// Reset all globals
	done = true;
	current_opened_div = -1;
}

// This function fades in the resume fixed text, used in index.js
function fade_in_resume()
{
	$.each(experience_text_ids, function(index, value) {
		$(value).velocity({
			"left": "-=10%"
		}, global_animation_time, global_ease_in);
	});

	// Initialize globals
	done = true;
	current_opened_div = -1;
}

// This function aids in keeping the text mobile during scrolling
function resume_scroll()
{
	// Calculate difference in scroll from before to after
	var diff_in_scroll = $(experience_ids[0]).offset().top - current_top;
	
	// Update current_top
	current_top = $(experience_ids[0]).offset().top;
	
	$.each(experience_text_ids, function(index, value) {
		$(value).css('top', '+=' + diff_in_scroll);
	});
}