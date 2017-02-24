'use strict';

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: Where is this invoked? What values are passed in? Where does it interact elsewhere in the code?
  // It is invoked in the aboutController by the aboutController.index method. repoView.index callback is being passed in, and then the function uses a .get request to get the data from the github api. It calls the callback which is in repoView.js.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos?per_page=5&sort=updated')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
