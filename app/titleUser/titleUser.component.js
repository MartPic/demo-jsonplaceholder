angular.module('myApp')
    .component('titleUser', {
        templateUrl: 'titleUser.html',
        controller: titleUserController,
        bindings: {
            selectedUser: '&'
        }
    });