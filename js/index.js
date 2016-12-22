// This .js is for all things on the intro-page and home page, and general navigation.
var state = "";

$(document).ready(function() {
	// ReplaceState
	var stateObject = { url: "home" };
	history.replaceState(stateObject, "", "");

	// $('#col-9').css('opacity', '0');
	// $('#col-9').css('left', '+10%');
	$('#experience-wt-text').css('top', $('#experience-wt').offset().top + (((parseInt($('#experience-wt').css('top')) + parseInt($('#experience-wt').css('height'))) / 2) - (parseInt($('#experience-wt-text').css('height')) / 2)));
	$('#experience-wt-text').css('left', $('#experience-wt').offset().left + (((parseInt($('#experience-wt').css('left')) + parseInt($('#experience-wt').css('width'))) / 2) - (parseInt($('#experience-wt-text').css('width')) / 2)));
	$('#experience-mdp-text').css('top', $('#experience-mdp').offset().top + (((parseInt($('#experience-mdp').css('top')) + parseInt($('#experience-mdp').css('height'))) / 2) - (parseInt($('#experience-mdp-text').css('height')) / 2)));
	$('#experience-mdp-text').css('left', $('#experience-mdp').offset().left + (((parseInt($('#experience-mdp').css('left')) + parseInt($('#experience-mdp').css('width'))) / 2) - (parseInt($('#experience-mdp-text').css('width')) / 2)));
	$('#experience-ak-text').css('top', $('#experience-ak').offset().top + (((parseInt($('#experience-ak').css('top')) + parseInt($('#experience-ak').css('height'))) / 2) - (parseInt($('#experience-ak-text').css('height')) / 2)));
	$('#experience-ak-text').css('left', $('#experience-ak').offset().left + (((parseInt($('#experience-ak').css('left')) + parseInt($('#experience-ak').css('width'))) / 2) - (parseInt($('#experience-ak-text').css('width')) / 2)));
	$('#experience-183-text').css('top', $('#experience-183').offset().top + (((parseInt($('#experience-183').css('top')) + parseInt($('#experience-183').css('height'))) / 2) - (parseInt($('#experience-183-text').css('height')) / 2)));
	$('#experience-183-text').css('left', $('#experience-183').offset().left + (((parseInt($('#experience-183').css('left')) + parseInt($('#experience-183').css('width'))) / 2) - (parseInt($('#experience-183-text').css('width')) / 2)));
});

$(document).delegate('.front_door_image', 'click touchstart', function(event)
{
	state = "resume"; // For now
	$(".front_door_image").fadeOut(function() {
		// // Write home-info
		// home_info();

		// // Write information
		// $('#col-9').velocity({
		// 	opacity: 1,
		// 	"left": "-=10%"
		// }, 500);
	});
});

$(document).delegate('#about', 'click touchstart', function(event)
{
	state = "about";
	update_screen("about", about_info);
});

$(document).delegate('#resume', 'click touchstart', function(event)
{
	state = "resume";
	update_screen("resume", resume_info);
});

$(document).delegate('.portrait-caption', 'click touchstart', function(event)
{
	state = "home";
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
	$('#col-9').velocity({
		opacity: 0,
		"left": "+=10%"
	}, 500, function() {
		// Animation complete
		$('#col-9').empty();
		func();

		$('#col-9').velocity({
			opacity: 1,
			"left": "-=10%"
		}, 500);
	});
}

window.onpopstate = function(event)
{
	// Fade out old material and show new
	$('#col-9').velocity({
		opacity: 0,
		"left": "+=10%"
	}, 500, function() {
		// Animation complete
		$('#col-9').empty();
		
		if (event.state.url == "about")
		{	
			about_info();
		}
		else if (event.state.url == "home")
		{
			home_info();
		}
		else if (event.state.url == "resume")
		{
			resume_info();
		}

		$('#col-9').velocity({
			opacity: 1,
			"left": "-=10%"
		}, 500);
	});
}

$(window).resize(function() {
	if (state == "resume")
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
});

function home_info()
{
	// Append regular bio-wrapper
	$('#col-9').append("<div class=\"bio-wrapper-home\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"the-code-header left-pad-home beginning-pad\"><span class=\"cyan italic\">class</span><span class=\"green\"> &nbsp;KevKev</span><span class=\"white\"> {</span></p>\
					\
					<!-- Public: -->\
					<p class=\"the-code-priv-pub left-pad-home\">\
						<span class=\"pink\">public:</span>\
					</p>\
					\
					<p class=\"the-code-comment links-home\">\
						<span class=\"grey\">// All about me</span>\
					</p>\
					\
					<p class=\"the-code-body links-home\">\
						\<span class=\"clickable\" id=\"about\"><span class=\"green\">KevKev</span>\<span class=\"white\">()</span></span>\<span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment links-home\">\
						<span class=\"grey\">// My experiences</span>\
					</p>\
					\
					<p class=\"the-code-body links-home\">\
						<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><span class=\"clickable\" id=\"resume\"><span class=\"green\">resume</span><span class=\"white\">()</span></span><span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment links-home\">\
						<span class=\"grey\">// Say hello!</span>\
					</p>\
					\
					<p class=\"the-code-body links-home\">\
						<span class=\"white\">string&nbsp;</span><a href=\"\"><span class=\"green\">contactMe</span><span class=\"white\">(string</span><span class=\"pink\">& </span><span class=\"orange\">email</span><span class=\"white\">)</span></a><span class=\"white\">;</span>\
					</p><br>\
					\
					<!-- Private: -->\
					<p class=\"the-code-priv-pub left-pad-home\">\
						<span class=\"pink\">private:</span>\
					</p>\
					\
					<p class=\"the-code-comment links-home\">\
						<span class=\"grey\">// Mine.</span>\
					</p>\
					\
					<p class=\"the-code-body links-home\">\
						<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><a href=\"\"><span class=\"green\">myDiary</span><span class=\"white\">()</span></a><span class=\"white\">;</span>\
					</p><br>\
					\
					<p class=\"the-code-comment links-home\">\
						<span class=\"grey\">// pls.</span>\
					</p>\
					\
					<p class=\"the-code-body links-home\">\
						<span class=\"white\">list&#8249;string&#8250;&nbsp;</span><a href=\"\"><span class=\"green\">myFeelings</span><span class=\"white\">()</span></a><span class=\"white\">;</span>\
					</p>\
					\
					<p class=\"the-code-header left-pad-home\">\
						<span class=\"white\">};</span>\
					</p>"
	)

	// Closing div
	$('#col-9').append("</div>");
};
