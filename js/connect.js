// This .js file is for all things on the connect page.

var connect_tips = [ "#q_connect_tip_1", "#q_connect_tip_2" ];
var connect_icons = [ "#q_connect_icon_1", "#q_connect_icon_2", "#q_connect_icon_3", "#q_connect_icon_4" ];

$(document).delegate('.tips_connect_icon', 'mouseenter', function(event) 
{
	// Highlight that icon
	var this_id = '#' + this.id;
	$(this_id + "_img").attr('src', 'images/' + $(this_id).attr('name') + "_light.png");

	// Stop the hiding of icons, put them back to opacity 1
	$.each(connect_icons, function(index, value) {
		$(value).velocity("stop", true).velocity({
			opacity: 1
		}, color_animation_time);

		// Stop bringing up opacity on other divs too
		if (quad_ids[index] != '#q_connect')
			$(quad_ids[index]).velocity("stop", true).velocity({
				opacity: .2,
				backgroundColor: '#141414'
			}, color_animation_time);

		// Also stop tips from disappearing
		if (index == 0 || index == 1)
			$(connect_tips[index]).velocity("stop", true).velocity({
				opacity: 1
			}, color_animation_time);
	});
});

$(document).delegate('.tips_connect_icon', 'mouseleave', function(event) 
{
	//Un-highlight that icon
	var this_id = '#' + this.id;
	$(this_id + "_img").attr('src', 'images/' + $(this_id).attr('name') + "_icon.png");

	mouse_leave_div();
});

$(document).delegate('.tips_connect_icon', 'click touchstart', function(event)
{
	// Redirect to correct link
	switch ($('#' + this.id).attr('name'))
	{
		case "linkedin":
			window.open("https://www.linkedin.com/in/kevin-lee-484823bb");
			break;
		case "mail":
			if (!animation_running)
				update_screen("contact", contact_info);
			break;
		case "facebook":
			window.open("https://www.facebook.com/MisterKevKev");
			break;
		case "github":
			window.open("https://github.com/MisterKevin");
			break;
		default:
			console.log("Whoops! Shouldn't have entered here (redirect)");
			break;
	}
});

function show_connect()
{
	// Find correct color for images
	$.each(connect_icons, function(index, value) {
		$(value).css('color', perm_colors_tips[connect_index]);
	});
	
	// Show icons
	$.each(connect_icons, function(index, value) {
		$(value).velocity("stop", true).velocity({
			opacity: 1
		}, color_animation_time);
	});

	// Let go of animation
	animation_running = false;
}

function hide_connect()
{
	$.each(connect_icons, function(index, value) {
		$(value).velocity("stop", true).velocity({
			opacity: 0
		}, color_animation_time);
	});

	$.each(connect_tips, function(index, value) {
		$(value).velocity("stop", true).velocity({
			opacity: 0
		}, color_animation_time);
	});
}