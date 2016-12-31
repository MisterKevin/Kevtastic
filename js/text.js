// This .js file is for all dynamically displayed text, in a different file due to tabbing

function resume_info()
{
	// Append special centered bio-wrapper
	$('#col-9').append("\
		<div class=\"bio-wrapper-center\" id=\"info\">\
			<div class=\"back-arrow\">\
				<p class=\"code-header grey clickable\" id=\"back-arrow-id\"><<<</p>\
			</div>\
			<p class=\"code-header white center thin-underline-orange\" id=\"resume-header\"><span class=\"white\">\
				<b>resume(</span><span class=\"orange\" id=\"pdf\">pdf</span><span class=\"white\">)</b></span>\
			</p>\
			<div class=\"col-md-6\" id=\"resume-left-container\">\
				<p class=\"text-header-raleway-2 white left cyan\"><span class=\"border-bottom-cyan\">Education</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> University of Michigan - Bachelor's of Science</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Ann Arbor, MI | Fall '13 - May '17</span></span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Major: Computer Science | Minor: Music | GPA: 3.3 / 4.0</span></span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> International Academy - International Baccalaureate Diploma</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Bloomfield Hills, MI | Fall '09 - Winter '13</span></span></p>\
				<p class=\"text-header-raleway-2 white left cyan\"><span class=\"border-bottom-cyan\">Extracurriculars</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> CoE Undergraduate Student Advisory Board Member</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Fall '16 - <i>Present</i></span></span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Michigan Hope Volunteering</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Fall '15 - <i>Present</i></span></span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Computer Science Engineering Scholars</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Winter '15 - <i>Present</i></span></span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Philip Hayden Foundation Volunteer</span></p>\
				<p class=\"grey-text text-body-raleway-subtext margin-top-left-small\"><span class=\"tab\"><span class=\"tab\">Winter '13</span></span></p>\
				<p class=\"text-header-raleway-2 white left cyan\"><span class=\"border-bottom-cyan\">Key Courses Taken</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> EECS 482: Operating Systems</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> EECS 388: Computer Security</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> EECS 485: Web Database and Information Systems</span></p>\
				<p class=\"text-header-raleway-2 white left cyan\"><span class=\"border-bottom-cyan\">Key Skills</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Primary: C++11, Python, C, OpenGL</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Secondary: Multithreading, C++14, Boost.Asio, R</span></p>\
				<p class=\"white text-body-raleway\"><span class=\"tab\"><span class=\"orange\"><b>></b></span> Tertiary: HTML/CSS, Javascript, SQL, Java, OpenCV</span></p>\
			</div>\
			<div class=\"col-md-6\" id=\"experience-wrapper\">\
				<p class=\"text-header-raleway-2 white left cyan\"><span class=\"border-bottom-cyan\">Experience</span></p>\
				<div class=\"experience\" id=\"experience-wt\">\
					<p class=\"white text-body-raleway center\" id=\"experience-wt-text\"><b><span class=\"green\">Software Engineer Intern</span></b> with <b><span class=\"white\">Wolverine Trading, LLC</span></b><br>Chicago, IL | Summer '16</span></p>\
				</div>\
				<div class=\"experience\" id=\"experience-mdp\">\
					<p class=\"white text-body-raleway center\" id=\"experience-mdp-text\"><b><span class=\"cyan\">Multidisciplinary Design Program</span></b> with <b><span class=\"white\">MDA Information Systems</span></b><br>Ypsilanti, MI | Winter '16 - Fall '16</p>\
				</div>\
				<div class=\"experience\" id=\"experience-ak\">\
					<p class=\"white text-body-raleway center\" id=\"experience-ak-text\"><b><span class=\"pink\">Process Control Intern</span></b> with <b><span class=\"white\">AK Steel Corporation</span></b><br>Dearborn, MI | Summer '15</p>\
				</div>\
				<div class=\"experience\" id=\"experience-183\">\
					<p class=\"white text-body-raleway center\" id=\"experience-183-text\"><b><span class=\"orange\">EECS 183 Instructional Aide</span></b> with <b><span class=\"white\">University of Michigan</span></b><br>Ann Arbor, MI | Fall '15 - Winter '17</p>\
				</div>\
			</div>\
		</div>\
	");

	resume_position_texts();
}

function about_info()
{
	$('#col-9').append("\
		<div class=\"big_wrapper\" id=\"big_wrapper_id\">\
			<div class=\"back-arrow\">\
				<p class=\"code-header grey clickable\" id=\"back-arrow-id\"><<<</p>\
			</div>\
			<div class=\"bio-wrapper-center-about-header\" id=\"info\">\
				<p class=\"code-header white thin-underline-orange center\" id=\"about-header\"><b>about()</b></p>\
			</div>\
			<div class=\"bio-wrapper-center-about-body\">\
				<div class=\"bio-wrapper-center-about-body-inner\">\
					<p class=\"text-body-fira white word-wrap justified\">Hi, I'm <span class=\"cyan\">Kevin Lee</span>!</p><br>\
					<p class=\"text-body-fira white word-wrap justified\">I'm a current <span class=\"pink\">Senior at the University of Michigan</span>, studying <span class=\"pink\">Computer Science with a minor in Music</span>. My major and minor accurately reflect my interests; I am a creative and analytical student who is passionate about <span class=\"pink\">Software Engineering and the Creative Arts</span>.</p><br>\
					<p class=\"text-body-fira white word-wrap justified\"><span class=\"orange\"><b>> </b>Software Engineering:</span> I had my first \"Hello World\" experience just three years ago, and that has changed my life. I adore the problem-solving and puzzle-cracking aspect of software engineering and have had two software engineering internships ever since. I am now looking forward to working <span class=\"green\">full-time with Microsoft</span> in Seattle after I graduate!</p><br>\
					<p class=\"text-body-fira white word-wrap justified\"><span class=\"orange\"><b>> </b>Creative Arts:</span> Music keeps me sane. My primary instrument is the <span class=\"green\">Erhu: the two-stringed Chinese fiddle</span>, and secondaries would be the piano and violin. In addition to performing, I adore <span class=\"green\">Music Theory & Composition</span>. It's a wonderful subject, infinitely complex, and has intrigued me ever since I first learned what chords are.</p><br>\
					<p class=\"text-body-fira white word-wrap justified\">Outside of school, I have to admit that video games are pretty neat! I'm an avid <span class=\"pink\">gamer</span> in my free time. Find me on Overwatch! Other things I enjoy doing include <span class=\"pink\">beatboxing</span>, <span class=\"pink\">bartending</span>, and shopping for <span class=\"pink\">floral shirts</span> (they're fantastic).</p><br>\
					<p class=\"text-body-fira white word-wrap justified\">Thank you for visiting my website, and I hope you have a wonderful time exploring here. :)</p><br>\
					<p class=\"text-body-fira white word-wrap right\">Best,<br><span class=\"cyan\">Kevin Lee</span></p>\
				</div>\
			</div>\
		</div>\
	");
}

// action=\"https://formspree.io/mrkevinlee95@gmail.com\" method=\"POST\"
function contact_info()
{
	$('#col-9').append("\
		<div class=\"big_wrapper\" id=\"big_wrapper_id\">\
			<div class=\"back-arrow\">\
				<p class=\"code-header grey clickable\" id=\"back-arrow-id\"><<<</p>\
			</div>\
			<div class=\"bio-wrapper-center-about-header\" id=\"info\">\
				<p class=\"code-header white thin-underline-orange center\" id=\"contact-header\"><b>contactMe()</b></p>\
			</div>\");\
			<div class=\"bio-wrapper-center-about-body\">\
				<div class=\"bio-wrapper-center-about-body-inner\">\
					<form id=\"form-kl\">\
						<div class=\"form-group\">\
							<label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Name <span class=\"pink-text\">*</span></label>\
							<input name=\"name\" type=\"text\" class=\"form-control\" style=\"background-color: #d9d9d9; border: 1px solid #a6a6a6;\" aria-describedby=\"nameHelp\" placeholder=\"John Doe\">\
						</div>\
						<div class=\"form-group\">\
							<label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Email Address <span class=\"pink-text\">*</span></label>\
							<input name=\"email\" type=\"email\" class=\"form-control\" style=\"background-color: #d9d9d9; border: 1px solid #a6a6a6;\" aria-describedby=\"emailHelp\" id=\"email-id\" placeholder=\"johndoe@email.com\">\
						</div>\
						<div class=\"form-group\">\
						  <label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Telephone</label>\
					    <input name=\"telephone_num\" type=\"tel\" class=\"form-control\" style=\"background-color: #d9d9d9; border: 1px solid #a6a6a6;\"type=\"tel\" id=\"tel-input\" placeholder=\"(555) 555-5555\">\
							<small id=\"emailHelp\" class=\"form-text text-muted text-body-fira\" style=\"font-size: .9vw\">(Optional) Enter your phone number if you'd like to chat over a call instead!</small>\
						</div>\
						<div class=\"form-group\">\
					    <label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Body <span class=\"pink-text\">*</span></label>\
					    <textarea name=\"text\" class=\"form-control\" style=\"background-color: #d9d9d9; border: 1px solid #a6a6a6;\" id=\"text-area\" rows=\"8\" placeholder=\"Talk to me here!\"></textarea>\
					  </div>\
					  <input type=\"text\" name=\"_gotcha\" style=\"display:none\"/>\
						<input type=\"submit\" value=\"Send\" id=\"submit-id\" class=\"btn btn-warning text-btn-fira submit\"></button><br><br>\
					</form>\
				</div>\
			</div>\
		</div>\
	");

	// Mask input for phone # field
	jQuery(function($){
   $("#tel-input").mask("(999) 999-9999");
	});

	$('#form-kl').submit(submit_contact);
}

function home_info()
{
	$('#col-9').append("\
		<div class=\"big_wrapper\">\
			<div class=\"bio-wrapper-center-about-header\" id=\"info\">\
				<p class=\"code-header thin-underline-orange center\" id=\"about-header\"><b><span class=\"cyan italic\">struct</span><span class=\"green\"> KevKev</span><span class=\"white\">{};</span></b></p>\
			</div>\
			<div class=\"quad_wrapper\" id=\"quad_wrapper_id\">\
				<div class=\"quad\" id=\"q_about\">\
					<p class=\"white code-quad\">about()</p>\
				</div>\
				<div class=\"quad_tips tips_about\" id=\"q_about_tip_1\">\
					<p class=\"text-handwriting\" style=\"font-size: 1.9vw;\">tl;dr version of who i am</p>\
				</div>\
				<div class=\"quad_tips tips_about\" id=\"q_about_tip_2\">\
					<p class=\"text-handwriting\" style=\"font-size: 2.3vw;\">a quick glimpse into my life</p>\
				</div>\
				<div class=\"quad_tips tips_about\" id=\"q_about_tip_3\">\
					<p class=\"text-handwriting\" style=\"font-size: 2.8vw;\">Hello World!</p>\
				</div>\
				<div class=\"quad\" id=\"q_resume\">\
					<p class=\"white code-quad\">resume(<span id=\"pdf\">pdf</span>)</p>\
				</div>\
				<div class=\"quad_tips tips_resume\" id=\"q_resume_pdf_tip\">\
					<p class=\"text-handwriting\" style=\"font-size: 2.0vw;\">Click here for a .pdf version!</p>\
				</div>\
				<div class=\"quad_tips tips_resume\" id=\"q_resume_arrow_tip\">\
				</div>\
				<div class=\"quad_tips tips_resume\" id=\"q_resume_info_tip\">\
					<p class=\"text-handwriting\" style=\"font-size: 2.0vw;\">view my professional life here</p>\
				</div>\
				<div class=\"quad\" id=\"q_contact\">\
					<p class=\"white code-quad\">contactMe()</p>\
				</div>\
				<div class=\"quad\" id=\"q_other\">\
					<p class=\"white code-quad\">connect()</p>\
				</div>\
			</div>\
		</div>\
	");
};
