'use strict';

(function(){
 var mammalService = angular.module('mammalService',['ngResource']);


    mammalService.factory('mammals',['$resource', function(resource){
        return resource('http://localhost:8888/:name',{},{
            get: {method:'GET', isArray:true},
            add: {method:'POST'},
            delete: {method: 'DELETE'}
        });
    }]);
}());