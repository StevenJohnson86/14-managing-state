'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // Handlebars method for compiling a template is what is in the render const. The api data from github for our repos. It interacts with the about section in the index.html.
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
