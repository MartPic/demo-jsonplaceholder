'use strict';

//import JSONPlaceholderService from "./service/jsonplaceholder.service";
//import angular from "angular";

class JSONPlaceholderService {
    // @ngInject
    constructor($http) {
        this.$http = $http;
    }

    //chiamata all'url
    getUsers$() {
        return this.$http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/users`
        });
    }

    getPostsFromUser(id) {
        return this.$http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        });
    }
}

angular.module("myApp.services", []).service("jsonplaceholderService", JSONPlaceholderService);