(function($) {

	"use strict";

	$('[data-toggle="tooltip"]').tooltip()

	// $('#exampleModalCenter').modal('show')

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);

(function () {
	'use strict'
	const forms = document.querySelectorAll('.requires-validation')
	Array.from(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
	
		  form.classList.add('was-validated')
		}, false)
	  })
	})()
	