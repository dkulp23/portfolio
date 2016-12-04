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

Project.prototype.compileTemplate = function() {
  var blackMagicCompile = Handlebars.compile($('#projectTemplate').html());
  return blackMagicCompile(this);
};

Project.useDataToMakeObjects = function(data) {
  data.forEach(function(thisProject) {
    projects.push(new Project(thisProject));
  })
};

Project.getData = function() {
  if(localStorage.myProjectData) {
    var localStorageProjects = JSON.parse(localStorage.getItem('myProjectData'));
    Project.useDataToMakeObjects(localStorageProjects);
    Project.renderProjects();
  } else {
    $.getJSON('/scripts/data.json')
    .done(function(projectData) {
      console.log(projectData);
      Project.useDataToMakeObjects(projectData);
      Project.renderProjects();
      localStorage.setItem('myProjectData', JSON.stringify(projectData));
    })
  }
};

Project.renderProjects = function() {
  projects.forEach(function(projectInstance){
    $('#projects').append(projectInstance.compileTemplate());
    if($('#type-filter option:contains("' + projectInstance.projectType + '")').length === 0) {
      $('#type-filter').append('<option>' + projectInstance.projectType + '</option>');
    }
  })
};

Project.getData();
