'use strict';

var proNavsAndFilters = { };

proNavsAndFilters.mainNavListener = function() {
	$('.main_nav').on('click', '.nav_link', function(){
		$('.page-section').hide();
		$(`#${$(this).data('nav')}`).fadeIn(1000);
	});
	$('.main_nav .nav_link:first').click();
}

proNavsAndFilters.projectTypeFilter = function() {
	$('#type-filter').on('change', function() {
		if($(this).val()) {
			$('article').hide();
			$('article[data-type="' + $(this).val() + '"]').fadeIn(1000);
 		} else {
			$('article').fadeIn(1000);
			$('article.template').hide();
		}
	});
}

proNavsAndFilters.mainNavListener();
proNavsAndFilters.projectTypeFilter();
