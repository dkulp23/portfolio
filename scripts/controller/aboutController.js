'use strict';

var aboutController = {};

aboutController.showAbout = function() {
  $('.page-section').hide();
  $('#about').fadeIn(500);
};
