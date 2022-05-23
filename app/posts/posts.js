'use strict';

angular.module('myApp.posts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'posts/posts.html',
            controller: 'PostsCtrl'
        });
    }])

    //importare il service
    .controller('PostsCtrl', function ($scope, jsonplaceholderService) {
        async function GetUserList() {
            try {
                const res = await jsonplaceholderService.getUsers$();
                $scope.$apply(() => {
                    $scope.userDataJsonOptions = res.data;
                    $scope.userError = false;
                });
            } catch (error) {
                $scope.$apply(() => {
                    $scope.userError = true;
                    $scope.userDataJsonOptions = null;
                });
            }
        }

        $scope.onUserSelected = async () => {
            try {
                const res = await jsonplaceholderService.getPostsFromUser($scope.selectedUser.id);
                $scope.$apply(() => {
                    $scope.userPosts = res.data;
                    $scope.postsError = false;
                });
            } catch (error) {
                $scope.$apply(() => {
                    $scope.postsError = true;
                    $scope.userPosts = null;
                });
            }
        };

        GetUserList();
    });




