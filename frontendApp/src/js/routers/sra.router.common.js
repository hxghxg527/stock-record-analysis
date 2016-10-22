angular.module('sra.router.common', [])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        var default_router = "/dashboard";

        $urlRouterProvider
            .when('/dashboard', default_router)
            .otherwise(default_router);

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "pages/page_dashboard.html",
            controller: function ($rootScope, $scope, SRA_CONSTANT_COMMON) {
                addListeners();

                function addListeners() {
                    // receive model from child router, then update scope model.
                    $scope.$on(SRA_CONSTANT_COMMON.EVENT_TYPE.PV_CHANGE_MAIN_DASHBOARD_MODELS, function (evt, model) {
                        $scope.model = model;
                    });
                }
            }
        }).state("dashboard.unitList", {
            url: "/unitList",
            views: {
                'pvMainBlankWrapper': {
                    template: "",
                    controller: function ($rootScope, SRA_CONSTANT_COMMON) {
                        // update parent router model.
                        $rootScope.$broadcast(SRA_CONSTANT_COMMON.EVENT_TYPE.PV_CHANGE_MAIN_DASHBOARD_MODELS, {
                            tag: ""
                        });
                    }
                }
            }
        });
    }]);