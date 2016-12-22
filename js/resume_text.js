// This .js file holds the text to append that is used in resume.js

function wt_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Software Engineer Intern</span></b> with <b>Wolverine Trading, LLC</b><br>Chicago, IL | Summer '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Design and build software to <span class=\"green\"><b>universally emulate financial exchanges</b></span> for testing and benchmark purposes, specifically Miami's MIAX and Chicago CME Exchanges.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Create functional and latency tests for the emulator, then graph and statistically analyze using the <span class=\"green\"><b>R graphing language</b></span>.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Program heavily in network computing using the <b><span class=\"green\">Boost.Asio library</span></b> to mimic real-world TCP/UDP connections for the emulator.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"green\">></span></b> Work in an <b><span class=\"green\">agile development environment</span></b> which entails daily stand-ups and bi-weekly retrospectives.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-wt-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function mdp_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Multidisciplinary Design Program</span></b> with <b>MDA Information Systems</b><br>Ypsilanti, MI | Winter '16 - Fall '16</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Research, design, and implement a <span class=\"cyan\"><b>polar bear camera-based detection system</b></span> that ensures compliance with stakeholder's requirements.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Program a <span class=\"cyan\"><b>testing harness</b></span> to aid in the testing of the detection module's bounding box accuracy.</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Research and utilize <span class=\"cyan\"><b>computer vision</b></span> to calculate speed, distance, and bearing (SBD) from bounding box movements. Then, design and implement a radar-like GUI system using <span class=\"cyan\"><b>OpenGL</b></span> to visually display the SBD.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"cyan\">></span></b> Supply weekly <span class=\"cyan\"><b>written summaries and agendas</b></span> to the client, MDA Information Systems.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-mdp-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function ak_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">Process Control Intern</span></b> with <b>AK Steel Corporation</b><br>Dearborn, MI | Summer '15</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Design and implement an <span class=\"pink\"><b>automated steel tracking system</b></span> for steel samples created in the mill.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Create a <span class=\"pink\"><b>Motorola scanner program</b></span> to be used for barcode scanning. Then, learn and use the <span class=\"pink\"><b>ZEBRA</b></span> barcode printing language to design the labels to be printed.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Research environment resilient <span class=\"pink\"><b>barcode labels</b></span> and proactively contact major industry dealers for purchasing.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"pink\">></span></b> Use <span class=\"pink\"><b>HTML, CSS, and Java</b></span> to update the steel statistical website in preparation for new tests.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-ak-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}

function eecs_183_text(to_append) {
	var text = "<p class=\"white text-body-raleway center\" style=\"opacity: 0\"><b><span class=\"white\">EECS 183 Instructional Aide</span></b> with <b>University of Michigan</b><br>Ann Arbor, MI | Fall '15 - Winter '17</p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Design, create, and teach a weekly <span class=\"orange\"><b>personalized discussion section</b></span> for a class of approximately forty students.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Hold and perform <span class=\"orange\"><b>statistical analysis</b></span> on weekly <span class=\"orange\"><b>office hours</b></span> for the course in order to help improve overall office hour structure.</span></span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Aid in the <span class=\"orange\"><b>creation and proofreading</b></span> of project specifications, exam questions, and course documentation. In addition, aid in the <span class=\"orange\"><b>proctoring and grading</b></span> of the exams in the course.</span></p>\
							<p class=\"white text-body-raleway-subtext experience-subtext justified\"><span class=\"tab\"><b><span class=\"orange\">></span></b> Participate and actively engage in <span class=\"orange\"><b>weekly staff meetings</b></span> by providing critical input to the course's health and direction.</span></p>";

	// Only append text if boolean is true
	if (to_append)
	{ // Append text, don't return
		$('#experience-183-div').append(text);
	}
	else
	{ // Just return text otherwise
		return text;
	}
}