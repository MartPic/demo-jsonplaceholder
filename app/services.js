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

    getPost(id) {
        return this.$http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${id}`
        });
    }

    getPostComments(id) {
        return this.$http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        });
    }
}