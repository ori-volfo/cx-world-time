'use strict';

angular.module('myApp.hereTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hereTime', {
    templateUrl: 'hereTime/hereTime.html',
    controller: 'HereTimeCtrl'
  });
}])

.controller('HereTimeCtrl', [function() {
	
}]);