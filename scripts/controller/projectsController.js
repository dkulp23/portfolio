'use strict';

var projectsController = {};

projectsController.reveal = function() {
  $('.page-section').hide();
  $('#projects').fadeIn(500);
};
