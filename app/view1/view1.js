'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    //importare il service
.controller('View1Ctrl', function($scope, jsonplaceholderService) {
  $scope.jsonplaceholderService = jsonplaceholderService;
  $scope.jsonplaceholderService.getUsers$()
      .subscribe(result => {
        $scope.userDataJsonOptions = result;
      });
});




