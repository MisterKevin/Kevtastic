$(document).ready(function() {
	// ReplaceState
	var stateObject = { url: "home" };
	history.replaceState(stateObject, "", "");

	// $('#col-9').css('opacity', '0');
	// $('#col-9').css('left', '+10%');
});

$(document).delegate('.front_door_image', 'click', function(event)
{
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
	$('#info').append("<p class=\"text-header white thin-underline-orange center\">About Me</p>\
					<br>\
					<p class=\"text-body white word-wrap\">Hi, I'm <span class=\"cyan\">Kevin Lee</span>!</p><br>\
					\
					<p class=\"text-body white word-wrap\">I am a current <span class=\"pink\">senior in the University of Michigan</span>, studying <span class=\"pink\">Computer Science with a minor in Music</span>. My major and minor accurately reflect my interests; I am a creative and analytical student who is passionate about <span class=\"pink\">Software Engineering and the Creative Arts</span>.</p><br>\
					\
					<p class=\"text-body white word-wrap\"><span class=\"orange border-bottom-orange\">Software Engineering</span>: Logic and creativity, a perfect mix! I had my first \"Hello World\" experience just three years ago, and have had two software engineering internships since then. I enjoy the problem-solving and puzzle-cracking aspect of software engineering, and am looking forward to working <span class=\"green\">full-time with Microsoft</span> in Seattle after I graduate.</p><br>\
					\
					<p class=\"text-body white word-wrap\"><span class=\"orange border-bottom-orange\">Creative Arts</span>: Music keeps me sane. My primary instrument is the <span class=\"green\">two-string Chinese fiddle: the Erhu</span>, and secondaries would be the piano and violin. <span class=\"green\">Music theory and composition</span>, however, is where my heart lies in music. It's a wonderful subject, infinitely complex, and has intrigued me ever since I first learned the Circle of Fifths.</p><br>\
					\
					<p class=\"text-body white word-wrap\"><span class=\"orange border-bottom-orange\">Extracurriculars</span>: I am currently an Instructional Aide for <span class=\"green\">EECS 183: \"Elementary Programming Concepts\"</span> at this university and am a board member on the <span class=\"green\">College of Engineering's Undergraduate Student Advisory Board</span>, helping represent CS-LSA for all undergraduates. Outside of school, I have to admit that video games are pretty neat! I'm an avid gamer in my free time.</p><br>\
					\
					<p class=\"text-body white word-wrap\">Thank you for visiting my website, and I hope you have a wonderful time exploring here. :)<br><br>Best,<br><span class=\"cyan\">Kevin Lee</span></p>\
					</div>");

	// Closing div
	$('#col-9').append("</div>");
}

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