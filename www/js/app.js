// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
  /* ---------------------------------- Local Variables ---------------------------------- */
  HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
  ApListView.prototype.template = Handlebars.compile($("#ap-list-tpl").html());

  var service = new UnifiService();
  service.initialize().done(function () {
    router.addRoute('', function() {
     //findAll(); 
     iniciar();
    });

    router.addRoute('aps/:mac', function(mac) {
       service.restartAp(mac);
       //refreshPage();
    });

    router.start();
  });

  $(document).on("click", "#refresh-page", refreshPage);

  /* --------------------------------- Event Registration -------------------------------- */
  document.addEventListener('deviceready', function () {
    if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
        navigator.notification.alert(
          message,    // message
          null,       // callback
          "Ap Service UM", // title
          'OK'        // buttonName
          );
      };
    }
  }, false);

  /* ---------------------------------- Local Functions ---------------------------------- */
  function refreshPage() {
    iniciar();
  }

  function iniciar(){
      $('body').html(new HomeView(service).render().$el);
  }

  setInterval(function(){
    refreshPage();
  },15000);

}());
