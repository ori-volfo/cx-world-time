'use strict';

angular.module('myApp.timeFormat', ['ngRoute'])

    .component('timeFormat',{
        templateUrl: 'timeFormat/timeFormat.html',
        controller: ['$scope','timeFormatFactory',function($scope,timeFormatFactory){
            $scope.formatsArr = [
                'yyyy-M-d HH:mm:ss',
                'EEEE, MMMM d, yyyy hh:mm:ss a',
                'MMM d, yyyy hh:mm:ss a',
                'fullDate',
                'medium'
            ];

            $scope.changeFormat = changeFormat;

            function changeFormat(format){
                timeFormatFactory.setFormat(format);
            }
        }]
    });