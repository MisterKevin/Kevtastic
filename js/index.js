// This .js is for all things on the intro-page and home page, and general navigation.
var state = "";
var animation_running = false;
var global_animation_time = 600;
var global_ease_in = "easeInQuart";
var global_ease_out = "easeOutQuad";
var gradient_update_interval_ID = 0;
var pdf_clicked = false;

$(document).ready(function() {
	// ReplaceState
	history.replaceState({ url: "home" }, "", "");
});

$(document).delegate('.front_door_image', 'click touchstart', function(event)
{
	// Prevent multiple clicks on front door image
	if (!animation_running)
	{
		animation_running = true;
		state = "home";
		$(".front_door_image").fadeOut(function() {
			// Begin displaying gradient
			// update_gradient();
			// gradient_update_interval_ID = setInterval(update_gradient, 500);
			// initialize_gradient();

			// Write home-info
			home_info();

			// Generate home's quad colors
			quad_color_start();

			// Write information
			$('#col-9').velocity({
				opacity: 1,
				"left": "-=10%"
			}, global_animation_time, global_ease_in, function() {
				animation_running = false;
			});
		});
	}
});

/* Click */
$(document).delegate('#q_about', 'click touchstart', function(event)
{
	if (!animation_running)
		update_screen("about", about_info);
});

$(document).delegate('#q_resume', 'click touchstart', function(event)
{
	if (!animation_running && !pdf_clicked)
		update_screen("resume", resume_info);
	else
		pdf_clicked = false;
});

$(document).delegate('#q_contact', 'click touchstart', function(event)
{
	if (!animation_running)
		update_screen("contact", contact_info);
});

$(document).delegate('.portrait-caption', 'click touchstart', function(event)
{
	if (!animation_running)
		update_screen("home", home_info);
});

$(document).delegate('.portrait', 'click touchstart', function(event)
{
	if (!animation_running)
		update_screen("home", home_info);
});

$(document).delegate('#pdf', 'click touchstart', function(event)
{
	pdf_clicked = true;
	window.open("pdfs/KevinLee.Resume.pdf");
});

// Back arrow on click, in index.js as it's in every sub-js
$(document).delegate('#back-arrow-id', 'click touchstart', function(event)
{
	if (!animation_running)
		update_screen("home", home_info);
});

function update_screen(url, display_new_text_func)
{
	// Animation running
	animation_running = true;

	// Update state
	state = url;

	// Fade out old material and show new
	var old_pos = $('#col-9').offset().right;
	$('#col-9').velocity({
		opacity: 0,
		"left": "+=10%"
	}, global_animation_time, global_ease_out, function() {
		// Animation complete
		$('#col-9').empty();

		display_new_text_func();

		// Position back arrows
		position_back_arrows(url);

		// Generate colors if home
		if (url == "home")
		{
			pdf_clicked = false;
			quad_color_start();
		}

		$('#col-9').velocity({
			opacity: 1,
			"left": old_pos
		}, global_animation_time, global_ease_in, function() {
			animation_running = false;
		});

		// In addition, fade in fixed text from resume
		if (url == "resume")
		{
			// Fade in text
			fade_in_resume();

			// Keep track of current height of a div
			current_top = $(experience_ids[0]).offset().top;
			
			// Fix scrolling
			$('#info').scroll(resume_scroll);
		}
	});

	// In addition, fade out fixed text from resume
	if (history.state.url == "resume")
		fade_out_resume();

	// Update History
	if (history.state.url != "home" || url != "home")
		history.pushState({ url: url }, "", "");
}

// This function initializes back-arrow to be center of header
function position_back_arrows(url)
{
	var id = "";
	if (url == "about")
		id = "#about-header";
	else if (url == "resume")
		id = "#resume-header";
	else if (url == "contact")
		id = "#contact-header";

	$(".back-arrow").css('top', (parseInt($(id).css('height')) / 2) - (parseInt($('#back-arrow-id').css('height')) / 2));	
}

window.onpopstate = function(event)
{
	// Fade out old material and show new
	var old_pos = $('#col-9').offset().right;
	$('#col-9').velocity({
		opacity: 0,
		"left": "+=10%"
	}, global_animation_time, global_ease_out, function() {
		// Animation complete
		$('#col-9').empty();
		
		if (event.state.url == "about")
		{	
			about_info();
		}
		else if (event.state.url == "home")
		{
			home_info();
			quad_color_start();
			pdf_clicked = false;
		}
		else if (event.state.url == "resume")
		{
			resume_info();

			// Fade in fixed text
			fade_in_resume();
		}

		$('#col-9').velocity({
			opacity: 1,
			"left": old_pos
		}, global_animation_time, global_ease_in);
	});

	// In addition, fade out fixed text from resume
	if (state == "resume")
		fade_out_resume();

	// Update state
	state = event.state.url;
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
	// Append big_wrapper
	$('#col-9').append("<div class=\"big_wrapper\">");

	// Append body
	$('.big_wrapper').append("<div class=\"bio-wrapper-center-about-header\" id=\"info\">\
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
						</div>");

	// Closing div
	$('#col-9').append("</div>");
};
