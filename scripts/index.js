'use strict';

var projects = [ ];

function Project(obj) {
  this.title = obj.title;
  this.completedOn = obj.completedOn;
  this.numFiles = obj.numFiles;
  this.ghPages = obj.ghPages;
  this.imageURL = obj.imageURL;
  this.imgAlt = obj.imgAlt;
  this.description = obj.description;
}

Project.prototype.renderProject = function() {
  var $project = $('article.template').clone();
  $project.find('.title').text(this.title);
  $project.find('.dateComplete').text(this.completedOn);
  $project.find('.files').text(this.numFiles);
  $project.find('a').attr('href', this.ghPages);
  $project.find('img').attr('src', this.imageURL);
  $project.find('img').attr('alt', this.imgAlt);
  $project.find('.project-body').html(this.description);
  $project.removeClass('template');
  return $project;
};

myProjects.forEach(function(eachProjectProperty) {
  projects.push(new Project(eachProjectProperty));
});

projects.forEach(function(projectInstance){
  $('#projects').append(projectInstance.renderProject());
});
