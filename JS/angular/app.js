angular.module('portfolio',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "./JS/angular/templates/home.html",
            controller: "userController"
        })
        .state('home.piece',{
            url:'/piece',
            templateUrl: "./JS/angular/templates/profilePiece.html",
            controller: "userController"
        })

        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/');
    });
