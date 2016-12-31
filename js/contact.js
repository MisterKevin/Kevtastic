// This .js file is for all things on the contactMe page.

function contact_info()
{
	$('#col-9').append("<div class=\"big_wrapper\" id=\"big_wrapper_id\">\
		<div class=\"back-arrow\"><p class=\"code-header grey clickable\" id=\"back-arrow-id\"><<<</p></div>\
		<div class=\"bio-wrapper-center-about-header\" id=\"info\">\
			<p class=\"code-header white thin-underline-orange center\" id=\"contact-header\"><b>contactMe()</b></p>\
		</div>\");\
		<div class=\"bio-wrapper-center-about-body\">\
			<div class=\"bio-wrapper-center-about-body-inner\">\
				<form action=\"https://formspree.io/mrkevinlee95@gmail.com\" method=\"POST\">\
					<div class=\"form-group\">\
						<label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Name <span class=\"pink-text\">*</span></label>\
						<input name=\"name\" type=\"text\" class=\"form-control\" style=\"background-color: #d9d9d9;\" aria-describedby=\"nameHelp\" placeholder=\"John Doe\">\
					</div>\
					<div class=\"form-group\">\
						<label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Email Address <span class=\"pink-text\">*</span></label>\
						<input type=\"email\" class=\"form-control\" style=\"background-color: #d9d9d9;\" aria-describedby=\"emailHelp\" id=\"email-id\" placeholder=\"johndoe@email.com\">\
					</div>\
					<div class=\"form-group\">\
					  <label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Telephone</label>\
				    <input type=\"phone\" class=\"form-control\" style=\"background-color: #d9d9d9;\"type=\"tel\" id=\"tel-input\" placeholder=\"(555) 555-5555\">\
						<small id=\"emailHelp\" class=\"form-text text-muted text-body-fira\" style=\"font-size: .9vw\">(Optional) Enter your phone number if you'd like to chat over a call instead!</small>\
					</div>\
					<div class=\"form-group\">\
				    <label class=\"grey-text-kl text-body-fira\" style=\"font-size: 1.1vw\">Body <span class=\"pink-text\">*</span></label>\
				    <textarea class=\"form-control\" style=\"background-color: #d9d9d9;\" id=\"text-area\" rows=\"8\" placeholder=\"Talk to me here!\"></textarea>\
				  </div>\
				  <input type=\"text\" name=\"_gotcha\" style=\"display:none\"/>\
					<input type=\"submit\" value=\"Send\" class=\"btn btn-warning text-btn-fira\"></button><br><br>\
				</form>\
			</div>\
		</div>\
	</div>");

	// Mask input for phone # field
	jQuery(function($){
   $("#tel-input").mask("(999) 999-9999");
	});
}