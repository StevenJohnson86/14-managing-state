'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };

  // DONE: What value is in 'module'? What is the purpose of this line of code?
  // The window object is the value. It gives us access to the function inside the IIFE.
  module.aboutController = aboutController;

})(window);
