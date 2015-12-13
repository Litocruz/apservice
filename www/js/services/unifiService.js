var UnifiService = function() {

  var uri = "http://192.168.1.19:8888";

  var url;

  this.initialize = function(serviceURL) {
    url = serviceURL ? serviceURL : uri;
    var deferred = $.Deferred();
    deferred.resolve();
    return deferred.promise();
  }

  this.findAll = function() {
    return $.ajax({
        type        : 'GET',
        url         : url + '/api/wcl',
        crossDomain : true,
        dataType    : 'json',
        error      : function(xhr, ajaxOptions, thrownError) {

        }
    });
  }

  this.findByMac = function() {
    return $.ajax({
        type        : 'GET',
        url         : url + '/api/wcl/'+searchKey,
        crossDomain : true,
        dataType    : 'json',
        /*success     : function(aps) {
           // $('#somediv').html(ap.mac);
           //var ap = parseJSON(aps);
           //console.log("ap: "+aps);
           var aps = aps;
           return aps;
        },*/
        error      : function(xhr, ajaxOptions, thrownError) {

        }
    });
    /*return $.ajax({url: url + "/api/wcl"});*/
  }

  this.restartAp = function(ap) {
    //console.log("restartap: "+ap);
    $.ajax({
        type        : 'POST',
        url         : url + '/api/wcl/status/'+ap,
        crossDomain : true,
        data        :{format : 'json'},
        dataType    : 'json',
        success     : function(mac) {
           var macunida = mac.mac.replace(/:/gi,"");
           $('#' + macunida).attr({'src' : 'assets/pics/0.png'});
           console.log("mac: "+apb.name);
        },
        error      : function(xhr, ajaxOptions, thrownError) {
          console.log('xhr: '+xhr.status+' thrownError: '+thrownError);
          console.log("error");
        }
    });
    /*return $.ajax({url: url + "/api/wcl"});*/
  }
}
