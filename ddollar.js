function dynamize() {
  var my_code = $('#my_code');
  var forked_code = $('#forked_code');

  GitHub.User.fetch('ddollar', function(user) {
    $.each(user.repositories,  function(id, repo) {
      var repository_item       = document.createElement('li');
      repository_item.className = 'repository';
      var repository_link      = document.createElement('a');
      repository_link.href      = repo.url;
      repository_link.innerHTML = repo.name;
      repository_item.appendChild(repository_link);

      (repo.fork ? forked_code : my_code).prepend(repository_item);
    });
  });
}
