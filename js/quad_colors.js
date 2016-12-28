// This .js is for all things on the intro-page regarding colors

var color_animation_time = 400;
var random_colors = []; // Append to this
var perm_colors = [ "#A6E22E", "#66D9EF", "#F92672", "#FD971F" ];
var quad_ids = [ "#q_about", "#q_resume", "#q_contact", "#q_other" ];
var quad_tip_ids = [ ".tips_about", ".tips_resume" ];

/* Hover */
$(document).delegate('.quad', 'mouseenter', function(event)
{
	var this_div = "#" + this.id;
	var color_to_use = "";

	// Find index #
	$.each(quad_ids, function(index, value) {
		if (this_div == value)
		{
			color_to_use = random_colors[index];

			// Hide hand-written messages on hovered div
			$(quad_tip_ids[index]).velocity("stop", true).velocity({
				opacity: 0
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

			// Lower opacity on tips
			$(quad_tip_ids[index]).velocity("stop", true).velocity({
				opacity: 0.1
			}, color_animation_time);
		}
	});
});

/* Hover */
$(document).delegate('.quad', 'mouseleave', function(event)
{
	var this_div = "#" + this.id;

	// Lower opacity of div, and then raise opacity on all divs
	$(this_div).velocity("stop", true).velocity({
		opacity: .6
	}, color_animation_time * 2, "easeOutSine");

	// Up opacity on other divs
	$.each(quad_tip_ids, function(index, value) {
		if (value != this_div)
			$(value).velocity("stop", true).velocity({
				opacity: .7
			}, color_animation_time);
	});

	// Up opacity on rest of divs
	$.each(quad_ids, function(index, value) {
		if (value != this_div)
		{
			// Up opacity on other divs
			$(value).velocity("stop", true).velocity({
				opacity: .6
			}, color_animation_time * 2.5, "easeOutSine");
		}
		else
		{
			// Show hand-written messages
			$(quad_tip_ids[index]).velocity("stop", true).velocity({
				opacity: 0.7
			}, color_animation_time);
		}
	});
});

function quad_color_start()
{
	generate_random_colors();

	$.each(quad_ids, function(index, value) {
		$(value).css("opacity", .6);
		$(value).css("border", "2px solid" + random_colors[index]);
	});

	// Update "pdf" color to match border color
	$("#pdf").css("color", random_colors[1]);
}

function generate_random_colors()
{
	random_colors = [];
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
		random_colors.push(perm_colors[num]);	
		current_colors_picked[num] = true;

		counter += 1;
	}
}