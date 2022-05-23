'use strict';

angular.module('myApp.post', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/post/:postId', {
            templateUrl: 'post/post.html',
            controller: 'PostCtrl'
        });
    }])

    //importare il service
    .controller('PostCtrl', function ($scope, $routeParams, jsonplaceholderService) {
        jsonplaceholderService.getPost($routeParams.postId)
            .then(result => {
                $scope.postError = false;
                $scope.postData = result.data;
            })
            .catch(error => {
                $scope.postError = true;
                $scope.postData = null;
            });
        $scope.openComments = () => {
            jsonplaceholderService.getPostComments($routeParams.postId)
                .then(result => {
                    $scope.commentError = false;
                    $scope.commentsData = result.data;
                })
                .catch(error => {
                    $scope.commentError = true;
                    $scope.commentsData = null;
                });
        };
    });




