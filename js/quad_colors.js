// This .js is for all things on the intro-page regarding colors

var color_animation_time = 400;
var random_colors = []; // Append to this
var random_colors_tips = []; // Append to this too, for tips
var perm_colors = [ "#A6E22E", "#66D9EF", "#F92672", "#FD971F" ]; // Hint: [ Green, Cyan, Pink, Orange ]
var perm_colors_tips = [ "#B3E74B", "#75DCF0", "#FB518F", "#FDA035" ];
var quad_ids = [ "#q_about", "#q_resume", "#q_contact", "#q_other" ];
var quad_tip_ids = [ ".tips_about", ".tips_resume", ".tips_contact" ];
var arrow_img_colors = [ "images/green_arrow.png", "images/cyan_arrow.png", "images/pink_arrow.png", "images/orange_arrow.png" ];
var arrow_color_index= 0;

/* Hover */
$(document).delegate("#pdf", 'mouseenter mouseleave', function(event) 
{ // This is the hover function for the pdf span only
	if (event.type === "mouseenter")
		$("#pdf").css("background-color", "#4d4d4d");
	else
		$("#pdf").css("background-color", "");
});

$(document).delegate('.quad', 'mouseenter', function(event)
{
	var this_div = "#" + this.id;
	var color_to_use = "";

	// Find index #
	$.each(quad_ids, function(index, value) {
		if (this_div == value)
		{
			color_to_use = random_colors[index];

			// Show hand-written messages on hovered div
			$(quad_tip_ids[index]).velocity("stop", true).velocity({
				opacity: 1
			}, color_animation_time);
		}
	});
	
	// Up opacity on main div, lower on others
	$.each(quad_ids, function(index, value) {
		if (value == this_div)
		{
			// Up opacity on main div
			$(value).velocity("stop", true).velocity({
				opacity: 1
			}, color_animation_time);
		}
		else
		{
			// Lower opacity on other divs
			$(value).velocity("stop", true).velocity({
				opacity: .2,
				backgroundColor: "#141414"
			}, color_animation_time);
		}
	});
});

/* Hover */
$(document).delegate('.quad', 'mouseleave', function(event)
{
	var this_div = "#" + this.id;

	// Up opacity on rest of divs
	$.each(quad_ids, function(index, value) {
		if (value != this_div)
		{
			// Up opacity on other divs
			$(value).velocity("stop", true).velocity({
				opacity: 1
			}, color_animation_time * 2.5, "easeOutSine");
		}
		else
		{
			// Hide hand-written messages
			$(quad_tip_ids[index]).velocity("stop", true).velocity({
				opacity: 0
			}, color_animation_time);
		}
	});
});

function quad_color_start()
{
	generate_random_colors();

	$.each(quad_ids, function(index, value) {
		$(value).css("opacity", 1);
		$(value).css("border", "2px solid" + random_colors[index]);
	
		// Initialize tips' colors
		$(quad_tip_ids[index]).css("color", random_colors_tips[index]);
	});

	// Update "pdf" color to match border color
	$("#pdf").css("color", random_colors[1]);

	// Insert colored arrow
	$('#q_resume_arrow_tip').css("content", "url(" + arrow_img_colors[arrow_color_index] + ")");
}

function generate_random_colors()
{
	random_colors = [];
	random_colors_tips = [];
	var current_colors_picked = [ false, false, false, false ];
	var counter = 0;

	while (counter < 4)
	{
		var num = Math.floor(Math.random() * 4);
		while (current_colors_picked[num])
		{
			num += 1; // Next number
			num %= 4;
		}

		// Add colors
		random_colors.push(perm_colors[num]);	
		random_colors_tips.push(perm_colors_tips[num]);
		current_colors_picked[num] = true;

		if (counter == 1) // Second div, update arrow color with index
			arrow_color_index = num;

		counter += 1;
	}
}