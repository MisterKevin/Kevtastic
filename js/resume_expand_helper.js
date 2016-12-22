/* 
 * This .js file is the holder for all the functions that resume.js may need to call when
 * the user clicks on an experience div in order to *expand* it.
 */

// Calculate height of clicked-on div
function calculate_new_height(curr_map_index) 
{
	var newHTML = $("<div id=\"temp_sizer\" style=\"position : relative;\">" + text_funcs[curr_map_index](false) + "</div>").appendTo('#experience-wrapper');
	var newHeight = newHTML.height() + 10; // Padding
	
	// Delete temp div
	$('#temp_sizer').remove();

	return newHeight;
}

// Expands the experience div and reveals the inner text inside
function expand_curr_div(newHeight, curr_map_index)
{
	$(experience_ids[curr_map_index]).velocity({
		height: newHeight
	}, 500, function() {
		// Create wrapper, substring(1) because experience_div has "#" in front of it.
		$(experience_ids[curr_map_index]).append("<div id=\"" + experience_divs[curr_map_index].substring(1) + "\">");

		// Set opacity to zero
		$(experience_divs[curr_map_index]).css('opacity', '0');
		$(experience_divs[curr_map_index]).css('margin-left', '3%');

		// Insert actual data
		text_funcs[curr_map_index](true);

		// End div
		$(experience_ids[curr_map_index]).append("</div>");

		// Animation to show text
		$(experience_divs[curr_map_index]).velocity({
			opacity: 1
		}, 300, function() {
			done = true;
		});
	});
}


// Repositions the clicked-on text to top of div
function reposition_curr_text_on_expand(curr_map_index)
{
	var text_offset = $(experience_ids[curr_map_index]).offset().top;

	// Account for cascading shrinking divs above. 
	// If curr_map_index = 2, that means 2 div above that is shrinking. Thus, multiply by 2.
	text_offset -= curr_map_index * (($('#experience-wrapper').height() * .21) - ($('#experience-wrapper').height() * .15));

	$(experience_text_ids[curr_map_index]).velocity({
		top: text_offset
	}, 500);
}

// Repositions the other experience-divs in reaction to a div click to expand
function reposition_other_text_on_expand(newHeight, curr_map_index)
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
			}, 500);
		}
	});
}

// Shrink the rest of divs, touched when an experience div is clicked on
function morph_other_divs_on_expand(curr_map_index)
{
	$.each(experience_ids, function(index, value) {
			if (index != curr_map_index)
			{ // Don't want to shrink the current id
				$(value).velocity({
					height: "15%"
				}, 500);
			}
	});
}