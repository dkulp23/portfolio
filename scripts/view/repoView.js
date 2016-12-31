'use strict';

(function(module) {

  var repoViewObj = { };

  Handlebars.registerHelper('formatDate', function(dateToBeFormatted){
    return moment(dateToBeFormatted).format('MMMM DD, YYYY');
  })

  var repoTemplateCompiler = Handlebars.compile($('#git-template').html());

  repoViewObj.renderTheRepos = function() {
    $('#repo-ul').empty().append(
      repoObj.ghRepos.map(repoTemplateCompiler)
    );
  };

  repoObj.getRepos(repoViewObj.renderTheRepos);

  module.repoViewObj = repoViewObj;
})(window);
