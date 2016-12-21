// if (!done) 
	// { // Stopping animation from happening while one currently active
	// 	return;
	// }
	// done = false;

	// if (experience_wolverine_trading_bool) 
	// { // Already opened
	// 	experience_wolverine_trading_bool = false;

	// 	// Animation for removing text
	// 	$('#wolverine-trading-div').velocity({
	// 		opacity: 0
	// 	}, 300, function() {
	// 		// Animation complete, now shrink and delete
	// 		$('#wolverine-trading-div').remove();
	// 	});

	// 	// Animation for shinking div
	// 	$('#experience-wolverine-trading').velocity({
	// 		height: oldHeight
	// 	}, 500, function() {
	// 		done = true;
	// 	});

	// 	// Animation for moving wt-text
	// 	$('#experience-wt-text').velocity({
	// 		top: "+=" + (((parseInt($('#experience-wolverine-trading').css('top')) + oldHeight) / 2) - (parseInt($('#experience-wt-text').css('height')) / 2))
	// 	}, 500);
	// }
	// else 
	// { // Closing
	// 	experience_wolverine_trading_bool = true;

	// 	newHTML = $("<div id=\"temp_sizer\" style=\"position : relative;\">" + wolverine_trading_info_text() + "</div>").appendTo('#experience-wrapper');
	// 	oldHeight = $('#experience-wolverine-trading').height();
	// 	var newHeight = newHTML.height() + 10; // Padding

	// 	// Delete temp div
	// 	$('#temp_sizer').remove();

	// 	$('#experience-wolverine-trading').velocity({
	// 		height: newHeight
	// 	}, 500, function() {
	// 		// Create wrapper
	// 		$('#experience-wolverine-trading').append("<div id=\"wolverine-trading-div\">");

	// 		// Set opacity to zero
	// 		$('#wolverine-trading-div').css('opacity', '0');
	// 		$('#wolverine-trading-div').css('margin-left', '4%');

	// 		// Insert actual data
	// 		wolverine_trading_info();

	// 		// End div
	// 		$('#experience-wolverine-trading').append("</div>");

	// 		// Animation to show text
	// 		$('#wolverine-trading-div').velocity({
	// 			opacity: 1,
	// 		}, 300, function() {
	// 			done = true;
	// 		});
	// 	});

	// 	$('#experience-wt-text').velocity({
	// 		top: $('#experience-wolverine-trading').offset().top
	// 	}, 500, function() {
	// 		console.log("DONE");
	// 	});
	// }