function dynamize() {

  repository_list = document.createElement('ul');

  GitHub.User.fetch('ddollar', function(user) {
    $.each(user.repositories, function(id, repo) {
      if (!repo.fork) {
        repository_item = document.createElement('li');
        repository_item.className = 'repository_item';

        repository_link = document.createElement('a');
        repository_link.href = repo.url;
        repository_link.innerHTML = repo.name;
        repository_item.appendChild(repository_link);

        repository_list.appendChild(repository_item);
      }
    });
    console.log(user);
  });

  $('#repositories').append(repository_list);
}
