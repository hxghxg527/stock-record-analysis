angular.module('sra.router.common.ctrl.login', [])
    .controller('sraRouterCommonCtrlLogin', ['$rootScope', '$scope', 'SRA_CONSTANT_COMMON',
        function ($rootScope, $scope, SRA_CONSTANT_COMMON) {
            var self = this;

            self.vm = {
                name: "testing login page..."
            };
            self.internal = {};
        }]);