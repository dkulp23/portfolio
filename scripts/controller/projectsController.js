'use strict';

(function(module) {
  var projectsController = {};

  projectsController.showProjects = function() {
    $('.page-section').hide();
    $('#projects').fadeIn(500);
  };

  module.projectsController = projectsController;
})(window);
