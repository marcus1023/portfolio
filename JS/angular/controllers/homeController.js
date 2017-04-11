angular.module('portfolio').controller('userController', function($http,mainService ,$rootScope,$scope, $window){


$scope.pageload = function(loader){
  console.log('ran')
    if(loader === 'skill'){
      $('html, body').animate({
          scrollTop: $("#skills").offset().top
      }, 1500);
    }
    if(loader === 'folio'){
      $('html, body').animate({
          scrollTop: $("#folio").offset().top
      }, 1500);
    }
    if(loader === 'contact'){
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 1500);
    }
    if(loader === 'top'){
      $('html, body').animate({
          scrollTop: $("#toper").offset().top
      }, 2000);
    }
}

// Message to Marcus via email
$scope.sendMail = function(message){
  if(message.name && message.email && message.message){
    $(".sent").hide()
    $("#required-email").hide()
    $("#sent-email").show()
  }else{
    $("#required-email").show()
  }
}


})
