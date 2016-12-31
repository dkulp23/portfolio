'use strict';

(function(module) {

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

  Project.allProjects = [ ];

  Project.prototype.compileTemplate = function() {
    var blackMagicCompile = Handlebars.compile($('#projectTemplate').html());
    return blackMagicCompile(this);
  };

  Project.useDataToMakeObjects = function(data) {
    data.forEach(function(thisProject) {
      Project.allProjects.push(new Project(thisProject));
    })
  };

  Project.getData = function(callback) {
    if(localStorage.myProjectData) {
      var localStorageProjects = JSON.parse(localStorage.getItem('myProjectData'));
      Project.useDataToMakeObjects(localStorageProjects);
      callback();
    } else {
      $.getJSON('/data/data.json')
      .done(function(projectData) {
        Project.useDataToMakeObjects(projectData);
        callback();
        localStorage.setItem('myProjectData', JSON.stringify(projectData));
      })
    }
  };

  module.Project = Project;

})(window);
