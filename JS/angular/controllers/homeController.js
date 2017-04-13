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


$scope.defineProject = function(project){
  if(project === 'triad'){
    $scope.currentProject = {
      title: 'Triad PC Clinic',
      link: 'https://www.triadpcclinic.com/',
      image1: 'portbgTriad',
      image2: 'portbgTriad2',
      image3: 'portbgTriad3',
      tech: 'React JS, Userlite CMS, Ajax,CSS, HTML,Node JS, SQL',
      disc: 'This project was for a Raleigh Durham based tech and security firm and is a simple website allowing users to discover thier products, make payments, and facilitate client interaction.'
    }
  }
  if(project === 'cash'){
    $scope.currentProject = {
      title: 'Cash Analytics',
      link: 'https://www.getcashanalytics.com/',
      image1: 'cashAnalytics2',
      image2: 'cashAnalytics2',
      image3: 'cashAnalytics3',
      tech: 'Angular JS, Userlite CMS, Ajax, PHP, Bootstrap, CSS, HTML, Node JS, SQL',
      disc: 'This high end overnight investment analytics company is a major player in the big bank investment scene. Thier site is designed with a marketing funnel startiegy tooled to point clients in the right direction.'
    }
  }
  if(project === 'electric'){
    $scope.currentProject = {
      title: 'Guerrera Electric',
      link: 'http://www.guerreraelectric.com/',
      image1: 'electric',
      image2: 'electric2',
      image3: 'electric3',
      tech: 'Angular JS, Userlite CMS, Ajax, PHP, Bootstrap, CSS, HTML, Node JS, SQL',
      disc: 'Guerrera Electric is a main player in the PA electric ulitlity repair and installment scene. The blog associated with this site in componation with a rich site map made this project a bit challangeing. As always, however, I ended up with a very satisfied customer'
    }
  }
  if(project === 'construct'){
    $scope.currentProject = {
      title: 'Under Construction'
    }
  }
}

})
