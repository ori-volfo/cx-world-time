'use strict';

angular.module('myApp.services', [])
    .service('timeFormatFactory', function(){
        var format = "yyyy-M-d HH:mm:ss";
        function getFormat(){
            return format;
        }

        function setFormat(newFormat){
            format = newFormat;
        }
        return{
            getFormat: getFormat,
            setFormat: setFormat
        }
    })
    .service('timeZones', function($http){

        function getData(){
            return $http.get('http://dev.cellxpert.com/test/worldtime/');
        }

        return {
            getData: getData
        }

    });
