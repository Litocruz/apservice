var ApListView = function () {

  var aps;

  this.initialize = function() {
    this.$el = $('<div/>');
    this.render();
  };

  this.setAps = function(list) { 
    aps = list;
    this.render();
  }

  this.render = function() {
    this.$el.html(this.template(aps));
    return this;
  };

  Handlebars.registerHelper('parseaMac', function(mac) {
      return mac.replace(/:/gi,"");
  });

  this.initialize();

}
