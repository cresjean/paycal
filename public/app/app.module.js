'use strict';
require('angular');

var ipnovaApp = angular.module('myob', [
    require('angular-ui-router'),
    require('angular-ui-bootstrap')
]);

var HomeController = require('./components/home/home.controller.js');
ipnovaApp.controller('HomeController', ['$scope', '$log', '$http', HomeController]);

var FileReaderDirective = require('./components/home/fileReader.directive.js');
ipnovaApp.directive('fileReader', [FileReaderDirective]);

ipnovaApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "app/components/home/HomeTemplate.html",
            controller: 'HomeController',

        })
}]);
