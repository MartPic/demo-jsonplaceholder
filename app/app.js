// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.posts',
    'myApp.post',
    'myApp.version',
    'myApp.services',
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/post'});
    }]);
