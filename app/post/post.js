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
        async function GetPostList() {
            try {
                const res = await jsonplaceholderService.getPost($routeParams.postId);
                $scope.$apply(() => {
                    $scope.postData = res.data;
                    $scope.postError = false;
                });
            } catch (error) {
                $scope.$apply(() => {
                    $scope.postError = true;
                    $scope.postData = null;
                });
            }
        }

        $scope.openComments = async () => {
            try {
                const res = await jsonplaceholderService.getPostComments($routeParams.postId);
                $scope.$apply(() => {
                    $scope.commentsData = res.data;
                    $scope.commentError = false;
                });
            } catch (error) {
                $scope.$apply(() => {
                    $scope.commentError = true;
                    $scope.commentsData = null;
                });
            }
        };

        GetPostList();
    });




