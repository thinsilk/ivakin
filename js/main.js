$(document).ready(function() {


	$('.camera').hover(function() {
		var index = parseInt($(this).attr('data-index'));
		$('.text[data-index="'+ index +'"]').addClass('active');
	}, function() {
		var index = parseInt($(this).attr('data-index'));
		$('.text[data-index="'+ index +'"]').removeClass('active');
	})

	$('.text').hover(function() {
		var index = parseInt($(this).attr('data-index'));
		$('.camera[data-index="'+ index +'"]').addClass('active');
	}, function() {
		var index = parseInt($(this).attr('data-index'));
		$('.camera[data-index="'+ index +'"]').removeClass('active');
	})


});