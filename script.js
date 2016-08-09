$(document).ready(function () {
	$('h2').fadeIn(2000);
	$('h1').delay(1500).fadeIn(3000, function() {
		$('#design, #studio, #about').show();
		$('footer').show()
	});

	$('#menu1').click(function() {
		$('#designGallery').show();
		$('#tracking1').show()
	});
	$('#menu2').click(function() {
		$('#studioGallery').show();
		$('#tracking2').show()
	});

	$('.x').click(function () {
		$('#designGallery, #studioGallery').hide()
	});

	// $.fn.gallery = function(activeClass, elementClass) {

	// 	var active = $(activeClass);
	// 	var next = active.next();

	// 	if (next.length == 0) {
	// 		next = $(elementClass);
	// 	}

	// 	active.fadeOut(0).removeClass(activeClass);
	// 	next.fadeIn(0).addClass(activeClass);
	// }

	// $('.arrowRight').on('click', function() {
	// 	$.fn.gallery('.activeProj', '.project')
	// });

	$('.arrowRightD').click(function () {

		var actProj = $('.activeProjD');
		var nextProj = actProj.next('.projectD');

		if (nextProj.length == 0) {
			nextProj = $('.projectD').first();
		}

		actProj.fadeOut(0).removeClass('activeProjD');
		nextProj.fadeIn(0).addClass('activeProjD');

		var actDot = $('.activeDotD');
		var nextDot = actDot.next();

		if (nextDot.length == 0) {
			nextDot = $('.dotD').first();
		}

		actDot.removeClass('activeDotD');
		nextDot.addClass('activeDotD');

	})


	$('.arrowLeftD').click(function() {

		var actProj = $('.activeProjD');
		var prevProj = actProj.prev('.projectD');

		if (prevProj.length == 0) {
			prevProj = $('.projectD').last();
		}

		actProj.fadeOut(0).removeClass('activeProjD');
		prevProj.fadeIn(0).addClass('activeProjD');

		var actDot = $('.activeDotD');
		var	prevDot = actDot.prev();

		if (prevDot.length == 0) {
			prevDot = $('.dotD').last();
		}

		actDot.removeClass('activeDotD');
		prevDot.addClass('activeDotD');

	})

		$('.arrowRightS').click(function () {

		var actProj = $('.activeProjS');
		var nextProj = actProj.next('.projectS');

		if (nextProj.length == 0) {
			nextProj = $('.projectS').first();
		}

		actProj.fadeOut(0).removeClass('activeProjS');
		nextProj.fadeIn(0).addClass('activeProjS');

		var actDot = $('.activeDotS');
		var nextDot = actDot.next();

		if (nextDot.length == 0) {
			nextDot = $('.dotS').first();
		}

		actDot.removeClass('activeDotS');
		nextDot.addClass('activeDotS');

	})


	$('.arrowLeftS').click(function() {

		var actProj = $('.activeProjS');
		var prevProj = actProj.prev('.projectS');

		if (prevProj.length == 0) {
			prevProj = $('.projectS').last();
		}

		actProj.fadeOut(0).removeClass('activeProjS');
		prevProj.fadeIn(0).addClass('activeProjS');

		var actDot = $('.activeDotS');
		var	prevDot = actDot.prev();

		if (prevDot.length == 0) {
			prevDot = $('.dotS').last();
		}

		actDot.removeClass('activeDotS');
		prevDot.addClass('activeDotS');

	})

	$('#design, #studio, #about').click(function() {
		event.preventDefault();
	})

});