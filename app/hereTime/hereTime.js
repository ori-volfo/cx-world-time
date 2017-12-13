'use strict';

angular.module('myApp.hereTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hereTime', {
    templateUrl: 'hereTime/hereTime.html',
    controller: 'HereTimeCtrl'
  });
}])

.controller('HereTimeCtrl', ['$scope','$interval',function($scope,$interval) {
  var vm = this;

    $scope.time = new Date();

    $interval(function () {
        var now = new Date().getTime();
        now += 7200*1000;
        var timeRaw = new Date(now);
        $scope.time = timeRaw;
    }, 1000);



}]);