angular.module('sra.router.common', [
    'sra.router.common.ctrl.login'
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    var default_router = "/login";

    $urlRouterProvider
    // .when('/login/', default_router)
        .otherwise(default_router);

    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "routerPages/sra.login.html",
        controller: 'sraRouterCommonCtrlLogin',
        controllerAs: 'sraRouterCommonCtrlLogin'
    });

    //     .state("dashboard", {
    //         url: "/dashboard",
    //         templateUrl: "pages/page_dashboard.html",
    //         controller: function ($rootScope, $scope, SRA_CONSTANT_COMMON) {
    //             addListeners();
    //
    //             function addListeners() {
    //                 // receive models from child router, then update current scope models.
    //                 $scope.$on(SRA_CONSTANT_COMMON.EVENT_TYPES.PV_CHANGE_LOGIN_ROUTER_MODELS, function (evt, routerModels) {
    //                     $scope.routerModels = routerModels;
    //                 });
    //             }
    //         }
    //     }).state("dashboard.unitList", {
    //     url: "/unitList",
    //     views: {
    //         'pvMainBlankWrapper': {
    //             template: "",
    //             controller: function ($rootScope, SRA_CONSTANT_COMMON) {
    //                 // update parent router model.
    //                 $rootScope.$broadcast(SRA_CONSTANT_COMMON.EVENT_TYPES.PV_CHANGE_LOGIN_ROUTER_MODELS, {
    //                     tag: ""
    //                 });
    //             }
    //         }
    //     }
    // });
}]);