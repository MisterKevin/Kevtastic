// This .js file is for all things on the about page.

function about_info()
{
	$('#col-9').append("<div class=\"big_wrapper\" id=\"big_wrapper_id\">");

	// Append special centered bio-wrapper
	$('#big_wrapper_id').append("<div class=\"bio-wrapper-center-about-header\" id=\"info\">");

	// Body
	$('#info').append("<p class=\"code-header white thin-underline-orange center\" id=\"about_header\"><b>about()</b></p>");

	// Close bio-wrapper-header
	$('#big_wrapper_id').append("</div>");

	// Append body
	$('#big_wrapper_id').append("<div class=\"bio-wrapper-center-about-body\">\
					\
					<div class=\"bio-wrapper-center-about-body-inner\">\
					\
					<p class=\"code-fira white word-wrap justified\">Hi, I'm <span class=\"cyan\">Kevin Lee</span>!</p><br>\
					\
					<p class=\"code-fira white word-wrap justified\">I'm a current <span class=\"pink\">senior at the University of Michigan</span>, studying <span class=\"pink\">Computer Science with a minor in Music</span>. My major and minor accurately reflect my interests; I am a creative and analytical student who is passionate about <span class=\"pink\">Software Engineering and the Creative Arts</span>.</p><br>\
					\
					<p class=\"code-fira white word-wrap justified\"><span class=\"orange border-bottom-orange\">Software Engineering</span>: I had my first \"Hello World\" experience just three years ago, and that has changed my life. I adore the problem-solving and puzzle-cracking aspect of software engineering. I have had two software engineering internships and am now looking forward to working <span class=\"green\">full-time with Microsoft</span> in Seattle after I graduate!</p><br>\
					\
					<p class=\"code-fira white word-wrap justified\"><span class=\"orange border-bottom-orange\">Creative Arts</span>: Music keeps me sane. My primary instrument is the <span class=\"green\">two-string Chinese fiddle: the Erhu</span>, and secondaries would be the piano and violin. <span class=\"green\">Music theory and composition</span>, however, is where my heart lies in music. It's a wonderful subject, infinitely complex, and has intrigued me ever since I first learned the Circle of Fifths.</p><br>\
					\
					<p class=\"code-fira white word-wrap justified\"><span class=\"orange border-bottom-orange\">Extracurriculars</span>: I am currently an Instructional Aide for <span class=\"green\">EECS 183: \"Elementary Programming Concepts\"</span> at this university and am a board member on the <span class=\"green\">College of Engineering's Undergraduate Student Advisory Board</span>, helping represent CS-LSA for all undergraduates. Outside of school, I have to admit that video games are pretty neat! I'm an avid gamer in my free time.</p><br>\
					\
					<p class=\"code-fira white word-wrap justified\">Thank you for visiting my website, and I hope you have a wonderful time exploring here. :)</p><br>\
					\
					<p class=\"code-fira white word-wrap right\">Best,<br><span class=\"cyan\">Kevin Lee</span></p>\
					</div></div>");

	// Closing div
	$('#col-9').append("</div>");

	// Big closing div
	$('#col-9').append("</div>");
}