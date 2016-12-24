// This .js is for all things regarding gradients that I have written

var background_gradient_angle = 45;
var gradient_pong = false;
var gradient_colors = "#272822, #272822, #272822, #371d00, #101603, #031417, #19010a, #371d00, #272822";

// Initializes the beginning gradient
function initialize_gradient()
{
	$('body').css('-webkit-animation', 'Gradient 120s linear infinite');
	$('body').css('-moz-animation', 'Gradient 120s linear infinite');
	$('body').css('animation', 'Gradient 120s linear infinite');
}

// Updates angle
function update_gradient()
{
	console.log("touched");
	$('body').css('background', 'linear-gradient(' + background_gradient_angle + 'deg, ' + gradient_colors + ')');
	$('body').css('background-size', '1800% 1800%');

	// If 135, start decrementing. If 45, start incrementing.
	if (background_gradient_angle == 135)
		gradient_pong = true;
	if (background_gradient_angle == 45)
		gradient_pong = false;
	if (gradient_pong)
		background_gradient_angle -= 1;
	else
		background_gradient_angle += 1;
}

// Reverts back to gray, called when any link is clicked besides home.
function revert_gradient()
{
	gradient_colors = "#272822, #272822"; 
}

// Called upon returning back to home page
function start_gradient()
{
	gradient_colors = "#272822, #101603, #031417, #19010a, #321b01, #272822";
}