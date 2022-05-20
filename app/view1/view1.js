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
  jsonplaceholderService.getUsers$()
      .then(result => {
        $scope.userDataJsonOptions = result.data;
      });
  $scope.onUserSelected = () => {
      jsonplaceholderService.getPostsFromUser($scope.selectedUser.id)
        .then(result => {
          $scope.userPosts = result.data;
        });
  };
});




