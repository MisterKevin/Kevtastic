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
				    <span class=\"white\">Name:</span>\
				    	<input type=\"text\" name=\"name\"><br>\
				    <span class=\"white\">Replyto:</span>\
				    	<input type=\"email\" name=\"_replyto\"><br>\
				    <span class=\"white\">Send:</span>\
				    	<input type=\"submit\" value=\"Send\"><br>\
				</form>\
			</div>\
		</div>\
	</div>");
}