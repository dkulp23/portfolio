'use strict';

var proNavsAndFilters = { };

proNavsAndFilters.mainNavListener = function() {
	$('.main_nav').on('click', '.nav_link', function(){
		$('.page-section').hide();
		$(`#${(this).data('nav')}`).fadeIn(1000);
	});
}