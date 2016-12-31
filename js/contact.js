// This .js file is for all things on the contactMe page.

$(document).delegate('#submit-id', 'click touchstart', function(event)
{
	// Don't let page refresh
	event.preventDefault();
	console.log("CLICKED\n");
});