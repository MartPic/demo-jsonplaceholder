export default class JSONPlaceholderService {
    /* @ngInject */
    constructor($http) {
        this.$http = $http;
    }

    getUsers$() {
        return this.$http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/users`
        });
    }
}