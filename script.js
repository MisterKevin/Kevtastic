$(document).ready(function() {
	// ReplaceState
	var stateObject = { url: "home" };
	history.replaceState(stateObject, "", "");

	// Show home
	// home_info();
});

$(document).delegate('.front_door_image', 'click', function(event)
{
	$(".front_door_image").fadeOut();
});

$(document).delegate('#about', 'click', function(event)
{
	update_screen("about", about_info);
});

$(document).delegate('#resume', 'click', function(event)
{
	update_screen("resume", resume_info);
});

$(document).delegate('.portrait-caption', 'click', function(event)
{
	update_screen("home", home_info);
});

function update_screen(url, func)
{
	// Update History
	if (history.state.url != "home" || url != "home")
	{
		var stateObject = { url: url };
		history.pushState(stateObject, "", "");
	}
	
	// Fade out old material and show new
	$('#col-9').fadeOut();
	setTimeout(function() {
		$('#col-9').empty();
		func();
		$('#col-9').fadeIn();
	}, 500);
}


window.onpopstate = function(event)
{
	// Fade out old material and show new
	$('#col-9').fadeOut();
	setTimeout(function() {
		$('#col-9').empty();
		if (event.state.url == "about")
		{	
			about_info();
		}
		else if (event.state.url == "home")
		{
			home_info();
		}
		$('#col-9').fadeIn();
	}, 500);
}

function resume_info()
{
	// Append special centered bio-wrapper
	$('#col-9').append("<div class=\"bio-wrapper-center\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"the-code-header white center thin-underline-orange\">Resume</p>");

	// Closing div
	$('#col-9').append("</div>");
}

function about_info()
{
	// Append special centered bio-wrapper
	$('#col-9').append("<div class=\"bio-wrapper-center\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"the-code-header white center thin-underline-orange\">About Me</p>");

	// Closing div
	$('#col-9').append("</div>");
}

function home_info()
{
	// Append regular bio-wrapper
	$('#col-9').append("<div class=\"bio-wrapper\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"the-code-header\"><span class=\"cyan italic\">class</span><span class=\"green\"> &nbsp;KevKev</span><span class=\"white\"> {</span></p>\
					\
					<!-- Public: -->\
					<p class=\"the-code-comment\">\
						<span class=\"pink\">public:</span>\
					</p>\
					\
					<p class=\"the-code-comment\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"grey\">// All about me</span>\
					</p>\
					\
					<p class=\"the-code-body\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<span class=\"clickable\" id=\"about\"><span class=\"green\">KevKev</span>\<span class=\"white\">()</span></span>\<span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"grey\">// My experiences</span>\
					</p>\
					\
					<p class=\"the-code-body\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><span class=\"clickable\" id=\"resume\"><span class=\"green\">resume</span><span class=\"white\">()</span></span><span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"grey\">// Say hello!</span>\
					</p>\
					\
					<p class=\"the-code-body\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"white\">string&nbsp;</span><a href=\"\"><span class=\"green\">contact</span><span class=\"white\">(string</span><span class=\"pink\">&</span><span class=\"orange\">name</span><span class=\"white\">, string</span><span class=\"pink\">&</span><span class=\"orange\">email</span><span class=\"white\">, string</span><span class=\"pink\">&</span><span class=\"orange\">body</span><span class=\"white\">)</span></a><span class=\"white\">;</span>\
					</p><br>\
					\
					<!-- Private: -->\
					<p class=\"the-code-comment\">\
						<span class=\"pink\">private:</span>\
					</p>\
					\
					<p class=\"the-code-comment\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"grey\">// Mine.</span>\
					</p>\
					\
					<p class=\"the-code-body\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><a href=\"\"><span class=\"green\">myDiary</span><span class=\"white\">()</span></a><span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"grey\">// pls.</span>\
					</p>\
					\
					<p class=\"the-code-body\">\
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><a href=\"\"><span class=\"green\">myFeelings</span><span class=\"white\">()</span></a><span class=\"white\">;</span>\
					</p>\
					\
					<p class=\"the-code-header\">\
						<span class=\"white\">};</span>\
					</p>"
	)

	// Closing div
	$('#col-9').append("</div>");
};