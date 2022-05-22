'use strict';

angular.module('myApp.posts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'PostsCtrl'
  });
}])

    //importare il service
.controller('PostsCtrl', function($scope, jsonplaceholderService) {
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




