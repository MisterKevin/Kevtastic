// This .js file is for all things on the contactMe page.
function submit_contact(event)
{
	// Don't let page refresh
	event.preventDefault();

	console.log("Submitting AJAX");
	$.ajax({
		url: 'https://formspree.io/mrkevinlee95@gmail.com',
		method: 'POST',
		dataType: 'json',
		data: $('#form-kl').serialize(),
		success: function(data) {
			console.log("Success");
		},
		error: function(error) {
			console.log("Error");
		}
	});
}

// $(document).delegate('#submit-id', 'click touchstart', function(event)
// {
// 	// Don't let page refresh
// 	event.preventDefault();
// 	console.log("CLICKED\n");

// 	$.ajax({
// 		url: 'https://formspree.io/mrkevinlee95@gmail.com',
// 		method: 'POST',
// 		dataType: 'json',
// 		data: JSON.stringify({username: $('#new_username_input').val(), firstname: $('#new_firstname_input').val(), lastname: $('#new_lastname_input').val(), password1: $('#new_password1_input').val(), password2: $('#new_password2_input').val(), email: $('#new_email_input').val() }),
// 		success: function(data) {
// 			console.log("Created a new user: " + $('#new_username_input').val());
// 			window.location="/wz0g4a2n/p3/login";
// 		},
// 		error: function(error) {
// 			// Response text is: {"errors":[{"message":"FIRST"}, {"message": "SECOND"}]}
// 			errors_dict = $.parseJSON(error.responseText);

// 			// This loop goes through each "message" dictionary
// 			$.each(errors_dict['errors'], function(index, value) {
// 				$('#error_container').append("<p class='error'>" + value.message + "</p>");
// 			});
// 		}
// 	});
// });