'use strict';

(function(module) {

  var repoObj = {};

  repoObj.ghRepos = [];

  repoObj.getRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).
    then(function(data) {
      data.forEach(function(obj){
        repoObj.ghRepos.push(obj);
        callback();
      })
    }
    )
  }
  module.repoObj = repoObj;
})(window);
