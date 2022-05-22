'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post/:postId', {
    templateUrl: 'post/post.html',
    controller: 'PostCtrl'
  });
}])

    //importare il service
.controller('PostCtrl', function($scope, $routeParams, jsonplaceholderService) {
  jsonplaceholderService.getPost($routeParams.postId)
      .then(result => {
        $scope.postData = result.data;
      });
  jsonplaceholderService.getPostComments($routeParams.postId)
      .then(result => {
          $scope.commentsData = result.data;
      });
});




