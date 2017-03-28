angular.module('portfolio',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "./JS/angular/templates/home.html",
            controller: "userController"
        })
        .state('home.pieces',{
            url:'/pieces',
            templateUrl: "./JS/angular/templates/pieces.html",
            controller: "userController"
        })
        .state('home.pieces.piecedetails',{
            url:'/piecedetails',
            templateUrl: "./JS/angular/templates/piecedetails.html",
            controller: "userController"
        })
        .state('home.pieces.piecescreenshots',{
            url:'/piecescreenshots',
            templateUrl: "./JS/angular/templates/piecescreenshots.html",
            controller: "userController"
        })

        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/');
    });
