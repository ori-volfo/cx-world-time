'use strict';

angular.module('myApp.worldTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/worldTime', {
    templateUrl: 'worldTime/worldTime.html',
    controller: 'WorldTimeCtrl'
  });
}])

.controller('WorldTimeCtrl', [function() {

}]);