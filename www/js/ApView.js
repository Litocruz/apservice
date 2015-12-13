var ApView = function(ap) {

  this.initialize = function() {
    this.$el = $('<div/>');
  };

  this.render = function() {
    this.$el.html(this.template(ap));
    return this;
  };

  this.initialize();
}
