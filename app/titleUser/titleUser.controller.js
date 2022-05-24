class titleUserController {
    /* @ngInject */
    constructor($scope, jsonplaceholderService) {
        this.$scope = $scope;
        this.jsonplaceholderService = jsonplaceholderService;
    }

    $onInit() {
        this.GetUserList();
    }

    async GetUserList() {
        try {
            const res = await this.jsonplaceholderService.getUsers$();
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
}