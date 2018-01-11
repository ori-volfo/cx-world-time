'use strict';

angular.module('myApp.worldTime', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/worldTime', {
    templateUrl: 'worldTime/worldTime.html',
    controller: 'WorldTimeCtrl'
  });
}])

.controller('WorldTimeCtrl', ['$scope','$http','$interval','timeFormatFactory','timeZones',function($scope, $http,$interval,timeFormatFactory,timeZones) {
    var gmtOffset = 0;
    $scope.factory = timeFormatFactory;
    $scope.$watch('factory.getFormat()',function(newFormat){
        $scope.format = newFormat;
    });

    $scope.zones = [];
    $scope.zonesPopulated = false;
    $scope.time = new Date();
    var UTCoffset = (new Date).getTimezoneOffset() * 60 * 1000;

    $interval(function () {
        var now = new Date().getTime();
        now += gmtOffset*1000 + UTCoffset;
        $scope.time = new Date(now);
    }, 1000);

    timeZones.getData().then(function(response){
        $scope.zones = response.data.zones;
        $scope.zonesPopulated = true;
    });

    $scope.selectCountry = function(index){
      const zone = $scope.zones[index];
      gmtOffset = zone.gmtOffset;
    }

}]);