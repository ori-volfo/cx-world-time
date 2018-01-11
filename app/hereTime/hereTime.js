'use strict';

angular.module('myApp.hereTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hereTime', {
    templateUrl: 'hereTime/hereTime.html',
    controller: 'HereTimeCtrl'
  });
}])

.controller('HereTimeCtrl', ['$scope','$interval','timeFormatFactory',function($scope,$interval,timeFormatFactory) {

    $scope.factory = timeFormatFactory;
    $scope.$watch('factory.getFormat()',function(newFormat){
        $scope.format = newFormat;
    });
    $scope.time = new Date();

    $interval(function () {
        var now = new Date().getTime();
        // now += 7200*1000;
        $scope.time = new Date(now);
    }, 1000);



}]);