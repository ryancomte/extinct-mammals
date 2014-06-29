'use strict';

(function(){
    var app = angular.module('TestApp',['mammalService']);

    app.controller('testCtrl',['$scope','mammals',function($scope,mammals){

        $scope.mammalList = mammals.get();

        $scope.addMammal = function(obj){
            $scope.mammalList.push(obj);
            mammals.add(obj);
            $scope.animal = null;
            $scope.showForm = false;
        }

        $scope.deleteMammal = function(obj){
            mammals.delete(obj);
            var index = $scope.mammalList.indexOf(obj);
            console.log(index);
            $scope.mammalList.splice(index,1);
        }
    }]);

})();