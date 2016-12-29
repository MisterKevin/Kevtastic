// This .js file is for all things on the about page.

function about_info()
{
	$('#col-9').append("<div class=\"big_wrapper\" id=\"big_wrapper_id\">");

	// Append back-arrows
	$('#big_wrapper_id').append("<div class=\"back-arrow\"><p class=\"code-header grey clickable\" id=\"back-arrow-id\"><<<</p></div>");

	// Append special centered bio-wrapper
	$('#big_wrapper_id').append("<div class=\"bio-wrapper-center-about-header\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"code-header white thin-underline-orange center\" id=\"about-header\"><b>about()</b></p>");

	// Close bio-wrapper-header
	$('#big_wrapper_id').append("</div>");

	// Append body
	$('#big_wrapper_id').append("<div class=\"bio-wrapper-center-about-body\">\
					\
					<div class=\"bio-wrapper-center-about-body-inner\">\
					\
					<p class=\"text-body-fira white word-wrap justified\">Hi, I'm <span class=\"cyan\">Kevin Lee</span>!</p><br>\
					\
					<p class=\"text-body-fira white word-wrap justified\">I'm a current <span class=\"pink\">Senior at the University of Michigan</span>, studying <span class=\"pink\">Computer Science with a minor in Music</span>. My major and minor accurately reflect my interests; I am a creative and analytical student who is passionate about <span class=\"pink\">Software Engineering and the Creative Arts</span>.</p><br>\
					\
					<p class=\"text-body-fira white word-wrap justified\"><span class=\"orange\"><b>> </b>Software Engineering:</span> I had my first \"Hello World\" experience just three years ago, and that has changed my life. I adore the problem-solving and puzzle-cracking aspect of software engineering and have had two software engineering internships ever since. I am now looking forward to working <span class=\"green\">full-time with Microsoft</span> in Seattle after I graduate!</p><br>\
					\
					<p class=\"text-body-fira white word-wrap justified\"><span class=\"orange\"><b>> </b>Creative Arts:</span> Music keeps me sane. My primary instrument is the <span class=\"green\">Erhu: the two-stringed Chinese fiddle</span>, and secondaries would be the piano and violin. In addition to performing, I adore <span class=\"green\">Music Theory & Composition</span>. It's a wonderful subject, infinitely complex, and has intrigued me ever since I first learned what chords are.</p><br>\
					\
					<p class=\"text-body-fira white word-wrap justified\">Outside of school, I have to admit that video games are pretty neat! I'm an avid <span class=\"pink\">gamer</span> in my free time. Find me on Overwatch! Other things I enjoy doing include <span class=\"pink\">beatboxing</span>, <span class=\"pink\">bartending</span>, and shopping for <span class=\"pink\">floral shirts</span> (they're fantastic).</p><br>\
					\
					<p class=\"text-body-fira white word-wrap justified\">Thank you for visiting my website, and I hope you have a wonderful time exploring here. :)</p><br>\
					\
					<p class=\"text-body-fira white word-wrap right\">Best,<br><span class=\"cyan\">Kevin Lee</span></p>\
					</div></div>");

	// Closing div
	$('#col-9').append("</div>");

	// Big closing div
	$('#col-9').append("</div>");
}