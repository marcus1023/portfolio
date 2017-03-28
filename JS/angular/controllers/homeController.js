angular.module('portfolio').controller('userController', function($http,mainService ,$rootScope,$scope, $window){

$scope.piece = {
  title: "Devmountain Discover",
  image: "../img/screenshot-dorseymusic.userlite.com-2016-12-05-10-04-02.png",
  details:{
    title: "Discover Tallent",
    subtitle: "boot camp specific tallent discovery",
    body: "this is the filler content"
  },
  screenshotsTitle: "View Images",
  screenshots: {
    one: "../img/discoverhome.png",
    two: '../img/discoverportfolio.png',
    three: '../img/discoverprofile.png',
    four: '../img/discovercompanies.png',
    five: '../img/discoverlogin.png',
    six: '../img/discovercs.png'
  }
}
$scope.pageload = function(loader){
  console.log('ran')
    if(loader === 'skills'){
      $(window).scrollTop(600);
    }
    if(loader === 'portfolio'){
      $(window).scrollTop(1700);
    }
    if(loader === 'contact'){
      $(window).scrollTop(2900);
    }
}


})
