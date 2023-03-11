/* alert */

$("#success").click(function () {
    $(".notify").toggleClass("activea");
    $("#notifyType").toggleClass("success");
    
    setTimeout(function(){
      $(".notify").removeClass("activea");
      $("#notifyType").removeClass("success");
    },2000);
  });

  $("#fail").click(function () {
    $(".notifail").addClass("activea");
    $("#notifyTypefail").addClass("fail");
    
    setTimeout(function(){
      $(".notifail").removeClass("activea");
      $("#notifyTypefail").removeClass("fail");
    },2000);
  });