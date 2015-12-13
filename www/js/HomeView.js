var HomeView = function (service) {

  var apListView;

  this.initialize = function () {
    // Se define un div wrapper para la vista (para adjuntar eventos)
    this.$el = $('<div/>');
    this.$el.html(this.findAll())
    apListView = new ApListView();
    this.render();
  };

  this.findAll = function() {
    service.findAll().done(function (aps) {
       apListView.setAps(aps);
    });
  }


  /*this.restartAp(mac) = function() {
    service.restartAp(mac).done(function (ap) {
      alert('Ap reiniciado');
    });
  }*/

  this.render = function() {
    this.$el.html(this.template());
    $('.content', this.$el).html(apListView.$el);
    return this;
  }

  this.initialize();    
}
