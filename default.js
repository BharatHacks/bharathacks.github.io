document.addEventListener("DOMContentLoaded", function() {
	[].slice.call(document.querySelectorAll(".btn")).forEach(function(a) {
		a.setAttribute("role", "button");
	});
});