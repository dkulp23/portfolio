'use strict';

(function(module) {
  var projectsController = {};

  projectsController.showProjects = function() {
    $('.page-section').hide();
    $('#projects').fadeIn(500);
  };

  projectsController.index = function(ctx, next) {
    if(ctx.articles.length) {
      Project.renderProjects(ctx.articles);
    } else {
      page('/');
    }
  }

  projectsController.showByType = function(ctx, next) {
    var typeProject = function(projectsByType) {
      ctx.projects = projectsByType;
      next();
    }
  };

  module.projectsController = projectsController;
})(window);
