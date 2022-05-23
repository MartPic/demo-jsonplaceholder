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
          $scope.userError = false;
          $scope.userDataJsonOptions = result.data;
      })
      .catch(error => {
          $scope.userError = true;
          $scope.userDataJsonOptions = null;
      });
  $scope.onUserSelected = () => {
      console.log('chiamata');
      jsonplaceholderService.getPostsFromUser($scope.selectedUser.id)
        .then(result => {
            $scope.postsError = false;
            $scope.userPosts = result.data;
        })
          .catch(error => {
              $scope.postsError = true;
              $scope.userPosts = null;
              });
  };
});




