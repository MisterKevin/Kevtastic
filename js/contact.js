// This .js file is for all things on the contactMe page.
function submit_contact(event)
{
	// Don't let page refresh
	event.preventDefault();
	
	// Delete old error container
	$('.error-container').empty();

	// Check for errors
	var error_container = form_error_check();
	if (error_container.length > 0)
		contact_form_error(error_container);
	else
	{
		// Send the AJAX message
		$.ajax({
			url: 'https://formspree.io/mrkevinlee95@gmail.com',
			method: 'POST',
			dataType: 'json',
			data: $('#form-kl').serialize(),
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
	if ($('#text-id').val().length  < 10)
		error_container.push("<p class=\"form-error\" style=\"margin-left: 5%\">> Please fill in the body with a <i>bit</i> more words. Tell me about you!</p>")
	
	return error_container;
}

// Animates the form and displays appropriate text
function contact_success()
{
	// Lower opacity of text, shrink div, then display success message
	$('.bio-wrapper-center-about-body-inner').velocity({
		opacity: 0
	}, global_animation_time, function() {
		$('.bio-wrapper-center-about-body').velocity({
			height: new_height,
		}, global_animation_time, function() {
			// Delete old text
			$('.bio-wrapper-center-about-body-inner').empty();

			// Append success message
			$('.bio-wrapper-center-about-body-inner').append("\
				<p class=\"green-text text-body-fira\" style=\"font-size: 1.1vw\">\
					Hurrah! You've successfully sent me an e-mail. Thanks!\
				</p>\
			");

			// Fade in
			$('.bio-wrapper-center-about-body-inner').velocity({
				opacity: 1
			}, global_animation_time);
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
	$('.error-container').append("\
		<p class=\"form-error\">\
			Hmm, something seems to be going wrong with the e-mail service. My sincerest apologies! Please try sending me an e-mail directly at <span class=\"orange\"><u>mrkevinlee95@gmail.com</u></span>.\
		</p>\
	");
}