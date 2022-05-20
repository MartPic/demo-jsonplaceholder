//service
// angular.module("myApp")
//     .service("getUserData", function() {
//         this.getPosts = function () {
//             return $http.get('http://jsonplaceholder.typicode.com/posts');
//         };
//     });

//Rx libreria per fare le chiamate
//import Rx from "rxjs/Rx";
//import angular from "angular";
import * as Rx from "rxjs";

export default class {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

    //chiamata all'url
    getUsers$() {
        return Rx.Observable.fromPromise(
            this.$http({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/users`
            })
        ).map(response => {
            return (response);
        });
    }
}