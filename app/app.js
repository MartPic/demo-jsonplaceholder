// Declare app level module which depends on views, and core components
import angular from "angular";
import postsModule from "./posts/posts";

angular.module('myApp', [
    'ngRoute',
    //'myApp.posts',
    //'myApp.post',
    'myApp.version',
    'myApp.services',
    postsModule,
    //angular,
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/post'});
    }]);
