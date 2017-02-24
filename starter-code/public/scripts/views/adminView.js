// DONE: Where is this invoked? Where does it interact elsewhere in the code?
// This function is invoked at the admin.html page becuase it is an IIFE so whenever that page is accessed it is invoked. It interacts elsewhere in the code at the html element #author-template by gathering the contents from methods in articleJS.

(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();
