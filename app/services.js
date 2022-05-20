'use strict';

//import JSONPlaceholderService from "./service/jsonplaceholder.service";

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
}

angular.module("myApp.services", []).service("jsonplaceholderService", JSONPlaceholderService);