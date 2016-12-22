/* 
 * This .js file is the holder for all the functions that resume.js may need to call when
 * the user clicks on an experience div in order to *shrink* it.
 */

// Remove current text from the clicked-on div
// [CURRENT UNUSED]
function remove_curr_text_on_shrink(experience_div) 
{
	$(experience_div).velocity({
		opacity: 0
	}, 300, function() {
		// Animation complete, now shrink and delete
		$(experience_div).remove();
	});
}

// Shrink current clicked div
function shrink_curr_div(curr_map_index)
{
	$(experience_ids[curr_map_index]).velocity({
		height: "21%"
	}, 500, function() {
		done = true;
	});
}

// Change other divs (expand them) when shrinking main current div
function morph_other_divs_on_shrink(curr_map_index)
{
	$.each(experience_ids, function(index, value) {
		if (index != curr_map_index)
		{ // Current id is already extended
			$(value).velocity({
				height: "21%"
			}, 500);
		}
	});
}

// Repositions the other experience-divs in reaction to a div click to shrink
function reposition_all_text_on_shrink(newHeight, curr_map_index)
{
	var unexpanded_div_height = parseInt($('#experience-wrapper').height()) * .21 + parseInt($('.experience').css("margin-top")); // 21% height + marginTop
	var top_offset = $(experience_ids[0]).offset().top;	// To calculate mid value, first find top offset. Start at 0th div top.

	$.each(experience_text_ids, function(index, value) {
		// Increment top_offset if not first div
		if (index > 0) { top_offset += unexpanded_div_height; }

		// Calculate mid val which is top_offset + height / 2 - text_height / 2
		var mid_val = top_offset + ((parseInt($('#experience-wrapper').height()) * .21) / 2) - (parseInt($(value).css('height')) / 2);

		$(value).velocity({
			top: mid_val
		}, 500);
	});
}