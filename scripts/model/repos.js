'use strict';

(function(module) {

  var repoObj = {};

  repoObj.ghRepos = [];

  repoObj.getRepos = function(callback) {
    // $.ajax({
    //   url: 'https://api.github.com/user/repos',
    //   method: 'GET',
    //   headers: {
    //     Authorization: `token ${githubToken}`
    //   }
    // }).
    $.get('/github/user/repos')
    .then(function(data) {
      data.forEach(function(obj){
        repoObj.ghRepos.push(obj);
        callback();
      })
    }
    )
  }
  module.repoObj = repoObj;
})(window);
