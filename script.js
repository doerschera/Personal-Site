$(document).ready(function () {
	$('h2').fadeIn(2000);
	$('h1').delay(1500).fadeIn(3000, function() {
		$('#design, #studio, #about').show();
		$('footer').show()
	});

	$('#menu1').click(function() {
		$('#designGallery').show()
	});
	$('#menu2').click(function() {
		$('#studioGallery').show()
	});

	$('#x').click(function () {
		$('#designGallery, #studioGallery').hide()
	});

	$('#arrowRight').click(function () {

		var actProj = $('.activeProj');
		var nextProj = actProj.next('.project');

		if (nextProj.length == 0) {
			nextProj = $('.project').first();
		}

		actProj.fadeOut(0).removeClass('activeProj');
		nextProj.fadeIn(0).addClass('activeProj');

		var actDot = $('.activeDot');
		var nextDot = actDot.next();

		if (nextDot.length == 0) {
			nextDot = $('.dot').first();
		}

		actDot.removeClass('activeDot');
		nextDot.addClass('activeDot');

	})

	$('#arrowLeft').click(function() {

		var actProj = $('.activeProj');
		var prevProj = actProj.prev('.project');

		if (prevProj.length == 0) {
			prevProj = $('.project').last();
		}

		actProj.fadeOut(0).removeClass('activeProj');
		prevProj.fadeIn(0).addClass('activeProj');

		var actDot = $('.activeDot');
		var	prevDot = actDot.prev();

		if (prevDot.length == 0) {
			prevDot = $('.dot').last();
		}

		actDot.removeClass('activeDot');
		prevDot.addClass('activeDot');

	})
});