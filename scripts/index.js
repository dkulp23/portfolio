'use strict';

var projects = [ ];

function Project(obj) {
  this.title = obj.title;
  this.completedOn = obj.completedOn;
  this.numFiles = obj.numFiles;
  this.ghPages = obj.ghPages;
  this.imageURL = obj.imageURL;
  this.imgAlt = obj.imgAlt;
  this.projectType = obj.projectType;
  this.description = obj.description;
}

Project.prototype.renderProject = function() {
  var blackMagicCompile = Handlebars.compile($('#projectTemplate').html());
  return blackMagicCompile(this);
};

myProjects.forEach(function(eachProjectProperty) {
  projects.push(new Project(eachProjectProperty));
});

projects.forEach(function(projectInstance){
  $('#projects').append(projectInstance.renderProject());
  $('#type-filter').append('<option>' + projectInstance.projectType + '</option>');
});
