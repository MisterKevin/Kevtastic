// This .js file is for all things on the contactMe page.
var refreshIntervalID = 0;

function submit_contact(event)
{
	// Don't let page refresh
	event.preventDefault();
	

	// Check for errors
	var error_container = form_error_check();
	if (error_container.length > 0) 
	{
		// Delete old error container
		$('.error-container').empty();

		contact_form_error(error_container);
	}
	else
	{
		// Send the AJAX message
		$.ajax({
			url: 'https://formspree.io/mrkevinlee95@gmail.com',
			method: 'POST',
			dataType: 'json',
			data: $('#form-kl').serialize(),
			beforeSend: function() {
				loading_msg();
			},
			success: function(data) {
				contact_success();
			},
			error: function(error) {
				formspree_error();
			}
		});
	}

}

function form_error_check()
{
	var error_container = [];
	if ($('#name-id').val().length == 0)
		error_container.push("<p class=\"form-error\" style=\"margin-left: 5%\">> Please fill in your name.</p>")
	if ($('#email-id').val().length == 0)
		error_container.push("<p class=\"form-error\" style=\"margin-left: 5%\">> Please fill in your email.</p>")
	else if (!/[^@]+@[^@]+\.[^@]+/.test($('#email-id').val()))
		error_container.push("<p class=\"form-error\" style=\"margin-left: 5%\">> Email address must be valid.</p>");
	if ($('#text-id').val().length  < 5)
		error_container.push("<p class=\"form-error\" style=\"margin-left: 5%\">> Please fill in the body with a <i>bit</i> more words. Tell me about you!</p>")
	
	return error_container;
}

// Animates the form and displays appropriate text
function contact_success()
{
	// Clear setInterval call
	clearInterval(refreshIntervalID);

	// Lower opacity of text, shrink div, then display success message
	$('.bio-wrapper-center-contact-body-inner').velocity({
		opacity: 0
	}, global_animation_time, global_ease_out, function() {
		$('.bio-wrapper-center-contact-body').velocity({
			height: "10%",
		}, global_animation_time, global_ease_out, function() {
			// Delete old text
			$('.bio-wrapper-center-contact-body-inner').empty();

			// Append success message
			$('.bio-wrapper-center-contact-body-inner').append("\
				<p class=\"green-text text-body-fira\" style=\"font-size: 1.1vw\">\
					Hurrah! You've successfully sent me an e-mail. Thanks!\
				</p>\
			");

			// Fade in
			$('.bio-wrapper-center-contact-body-inner').velocity({
				opacity: 1
			}, global_animation_time, global_ease_out);
		});
	});
}

// Error in user's form
function contact_form_error(error_container)
{
	$('.error-container').append("\
		<p class=\"form-error\">\
			Whoops! Looks like you have some errors in the form.\
		</p>\
	");

	$.each(error_container, function(index, value)
	{
		$('.error-container').append(value);
	});
}

// In case of error not in the form, but in formspree
function formspree_error()
{
	clearInterval(refreshIntervalID);
	
	// Reset other messages
	$('.error-container').empty();

	$('.error-container').append("\
		<p class=\"form-error\">\
			Hmm, something seems to be going wrong with the e-mail service. My sincerest apologies! Please try sending me an e-mail directly at <span class=\"orange\"><u>mrkevinlee95@gmail.com</u></span>.\
		</p>\
	");
}

// Show loading message
function loading_msg()
{
	$('.error-container').empty();

	$('.error-container').append("\
		<p class=\"loading-msg\">\
			Loading.\
		</p>\
	");

	refreshIntervalID = setInterval(function() {
		$('.loading-msg').append(" .");
	}, 1000);
}