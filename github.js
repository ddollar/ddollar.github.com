var GitHub = new function() {
  this.User = new function () {
    this.fetch = function(username, callback) {
      var url = 'http://github.com/api/v1/json/' + username + '?callback=?';
      user = $.getJSON(url, function(data) {
        callback(data.user);
      });
    }
  }
}
