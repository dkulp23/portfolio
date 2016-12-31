'use strict';

(function(module) {

	var projectView = { };

  projectView.renderProjects = function() {
    Project.allProjects.forEach(function(projectInstance){
      $('#projects').append(projectInstance.compileTemplate());
      if($('#type-filter option:contains("' + projectInstance.projectType + '")').length === 0) {
        $('#type-filter').append('<option>' + projectInstance.projectType + '</option>');
      }
    })
  };


	projectView.projectTypeFilter = function() {
		$('#type-filter').on('change', function() {
			if($(this).val()) {
				$('article').hide();
				page(`/projectType/${$(this).val()}`);
			} else {
				$('article').fadeIn(1000);
				$('article.template').hide();
			}
		});
	}

	// projectView.index = function(ctx, next) {
	projectView.projectTypeFilter();
	// };

	module.projectView = projectView;
})(window);
