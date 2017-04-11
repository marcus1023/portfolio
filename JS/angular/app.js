angular.module('portfolio',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "./JS/angular/templates/home.html",
            controller: "userController"
        })

        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/');
    });
