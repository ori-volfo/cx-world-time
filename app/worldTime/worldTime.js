'use strict';

angular.module('myApp.worldTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/worldTime', {
    templateUrl: 'worldTime/worldTime.html',
    controller: 'WorldTimeCtrl'
  });
}])

.controller('WorldTimeCtrl', ['$scope','$http','$interval',function($scope, $http,$interval) {
    var gmtOffset = 0;
    $scope.format = "yyyy-M-d HH:mm:ss";
    $scope.zones = [];
    $scope.time = new Date();

    $interval(function () {
        var now = new Date().getTime();
        now += gmtOffset*1000;
        var timeRaw = new Date(now);
        $scope.time = timeRaw;
    }, 1000);

    $http.get('http://dev.cellxpert.com/test/worldtime/').then(function(response){
        $scope.zones = response.data.zones;
    });

    $scope.selectCountry = function(index){
      const zone = $scope.zones[index];
      gmtOffset = zone.gmtOffset;
    }

}]);