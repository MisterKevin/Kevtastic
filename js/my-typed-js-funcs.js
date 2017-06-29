// For functions created by myself using Typed.js
document.addEventListener('DOMContentLoaded', function()
{
	// Show information (start after content loaded)
	// This stops screen showing improperly formatted text/CSS 
	// because the CSS / Javascript formatting is still loading, but
	// text already loaded.
	$(".bio-wrapper-3").css("opacity", 1);
	$(".code-front-door").css("opacity", 1);
	$("#portrait-col").css("border-right", "2px solid #75715E");
	$("#portrait-col").css("-webkit-box-shadow", "inset 0 0 100px rgba(0,0,0,.3)");
	$("#portrait-col").css("box-shadow", "inset 0 0 100px rgba(0,0,0,.3)");

	Typed.new("#typed", {
            stringsElement: document.getElementById('door-text'),
            typeSpeed: 0,
            contentType: 'html',
            loop: false,
            showCursor: false,
            startDelay: 500,
            backDelay: 0,
            backSpeed: 0
        });
});

