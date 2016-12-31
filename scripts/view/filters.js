'use strict';

(function(module) {

	var proNavsAndFilters = { };

	proNavsAndFilters.projectTypeFilter = function() {
		$('#type-filter').on('change', function() {
			if($(this).val()) {
				$('article').hide();
				// $('article[data-type=' + $(this).val() + ']').fadeIn(1000);
				page(`/type/${$(this.val())}`);
			} else {
				$('article').fadeIn(1000);
				$('article.template').hide();
			}
		});
	}

	proNavsAndFilters.projectTypeFilter();

	module.proNavsAndFilters = proNavsAndFilters;
})(window);
