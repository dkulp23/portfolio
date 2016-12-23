'use strict';

(function(module) {

  var repoObj = {};

  var ghRepos = [];

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
        ghRepos.push(obj);
        callback();
      })
    }
    )
  }

})(window);
