"use strict";

$(function () {

});

angular.module('sra.app', [
    "ui.router",
    "sra.templateCache",
    "sra.constant",
    "sra.router",
    "sra.controller",
    "sra.directive",
    "sra.service"
]).run(['$rootScope', 'SRA_CONSTANT_COMMON', function ($rootScope, SRA_CONSTANT_COMMON) {
    $rootScope.internal = {
        sraConstantCommon: SRA_CONSTANT_COMMON,
        appName: SRA_CONSTANT_COMMON.APP_NAME
    };
}]);;
angular.module('sra.constant.common', [])
    .constant('SRA_CONSTANT_COMMON', {
        APP_NAME: "Stock Record Analysis System",
        EVENT_TYPES: {
            PV_CHANGE_LOGIN_ROUTER_MODELS: "pv_change_login_router_models"
        },
        ROUTER_STATES: {
            LOGIN: "login"
        }
    });;
angular.module('sra.controller.cpu', [])
    .controller('sraCtrlCPU', ['$scope', function ($scope) {
        var self = this;

        self.vm = {};
        self.internal = {};
    }]);;
angular.module('sra.constant', [
    "sra.constant.common"
]);;
angular.module('sra.controller', [
    'sra.controller.cpu'
]);;
angular.module('sra.directive', []);;
angular.module('sra.router', [
    'sra.router.common'
]);;
angular.module('sra.service', [
    'sra.service.communication'
]);;
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
}]);;
angular.module('sra.service.communication', [])
    .factory('sraServiceCommunication', [function () {

        function Communication() {

        }

        Communication.prototype = {};

        return new Communication();
    }]);;
(function(module) {
try {
  module = angular.module('sra.templateCache');
} catch (e) {
  module = angular.module('sra.templateCache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('commonComponents/sra.test.html',
    '<div>test</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('sra.templateCache');
} catch (e) {
  module = angular.module('sra.templateCache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('routerPages/sra.login.html',
    '<div class="sra_login_page"><div class="sra_login_page_header"><div class="sra_login_page_header_left_container sra_clearfix"><img class="sra_f_l" src="icons/logo.png"><div class="sra_login_page_header_left_text sra_f_l">Stock Record Analysis System</div></div></div><div class="sra_login_page_middle_container"><div class="sra_login_page_login_part"><div class="sra_login_page_login_part_header">用户登录</div><div class="sra_login_page_login_part_content"><div class="sra_login_page_login_part_content_input_container sra_clearfix"><div class="sra_login_icon sra_f_l fa fa-user fa-lg fa-fw"></div><input class="sra_login_input sra_f_l" type="text" placeholder="会员号/邮箱"></div><div class="sra_login_page_login_part_content_input_container sra_clearfix"><div class="sra_login_icon sra_f_l fa fa-lock fa-lg fa-fw"></div><input class="sra_login_input sra_f_l" type="password" placeholder="密码"></div><div class="sra_login_page_login_part_content_other_container sra_clearfix"><a class="sra_f_l">忘记登录密码?</a> <a class="sra_f_r">免费注册</a></div><div class="sra_login_page_login_part_content_button sra_t_c">登&nbsp;&nbsp;录</div></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('sra.templateCache');
} catch (e) {
  module = angular.module('sra.templateCache', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/sra.test.html',
    '<div>test</div>');
}]);
})();
;
angular.module('sra.router.common.ctrl.login', [])
    .controller('sraRouterCommonCtrlLogin', ['$rootScope', '$scope', 'SRA_CONSTANT_COMMON',
        function ($rootScope, $scope, SRA_CONSTANT_COMMON) {
            var self = this;

            self.vm = {
                name: "testing login page..."
            };
            self.internal = {};
        }]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYS5tb2R1bGUuanMiLCJjb25zdGFudHMvc3JhLmNvbnN0YW50LmNvbW1vbi5qcyIsImNvbnRyb2xsZXJzL3NyYS5jb250cm9sbGVyLmNwdS5qcyIsIm1vZHVsZXMvc3JhLmNvbnN0YW50LmpzIiwibW9kdWxlcy9zcmEuY29udHJvbGxlci5qcyIsIm1vZHVsZXMvc3JhLmRpcmVjdGl2ZS5qcyIsIm1vZHVsZXMvc3JhLnJvdXRlci5qcyIsIm1vZHVsZXMvc3JhLnNlcnZpY2UuanMiLCJyb3V0ZXJzL3NyYS5yb3V0ZXIuY29tbW9uLmpzIiwic2VydmljZXMvc3JhLnNlcnZpY2UuY29tbXVuaWNhdGlvbi5qcyIsInRlbXBsYXRlQ2FjaGUvaHRtbDJUZW1wbGF0ZS5qcyIsInJvdXRlcnMvcm91dGVyc0NvbnRyb2xsZXJzL3NyYS5yb3V0ZXIuY29tbW9uLmN0cmwubG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FDRkE7QUNBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3JhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZnVuY3Rpb24gKCkge1xuXG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ3NyYS5hcHAnLCBbXG4gICAgXCJ1aS5yb3V0ZXJcIixcbiAgICBcInNyYS50ZW1wbGF0ZUNhY2hlXCIsXG4gICAgXCJzcmEuY29uc3RhbnRcIixcbiAgICBcInNyYS5yb3V0ZXJcIixcbiAgICBcInNyYS5jb250cm9sbGVyXCIsXG4gICAgXCJzcmEuZGlyZWN0aXZlXCIsXG4gICAgXCJzcmEuc2VydmljZVwiXG5dKS5ydW4oWyckcm9vdFNjb3BlJywgJ1NSQV9DT05TVEFOVF9DT01NT04nLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgU1JBX0NPTlNUQU5UX0NPTU1PTikge1xuICAgICRyb290U2NvcGUuaW50ZXJuYWwgPSB7XG4gICAgICAgIHNyYUNvbnN0YW50Q29tbW9uOiBTUkFfQ09OU1RBTlRfQ09NTU9OLFxuICAgICAgICBhcHBOYW1lOiBTUkFfQ09OU1RBTlRfQ09NTU9OLkFQUF9OQU1FXG4gICAgfTtcbn1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3JhLmNvbnN0YW50LmNvbW1vbicsIFtdKVxuICAgIC5jb25zdGFudCgnU1JBX0NPTlNUQU5UX0NPTU1PTicsIHtcbiAgICAgICAgQVBQX05BTUU6IFwiU3RvY2sgUmVjb3JkIEFuYWx5c2lzIFN5c3RlbVwiLFxuICAgICAgICBFVkVOVF9UWVBFUzoge1xuICAgICAgICAgICAgUFZfQ0hBTkdFX0xPR0lOX1JPVVRFUl9NT0RFTFM6IFwicHZfY2hhbmdlX2xvZ2luX3JvdXRlcl9tb2RlbHNcIlxuICAgICAgICB9LFxuICAgICAgICBST1VURVJfU1RBVEVTOiB7XG4gICAgICAgICAgICBMT0dJTjogXCJsb2dpblwiXG4gICAgICAgIH1cbiAgICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnc3JhLmNvbnRyb2xsZXIuY3B1JywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ3NyYUN0cmxDUFUnLCBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYudm0gPSB7fTtcbiAgICAgICAgc2VsZi5pbnRlcm5hbCA9IHt9O1xuICAgIH1dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3JhLmNvbnN0YW50JywgW1xuICAgIFwic3JhLmNvbnN0YW50LmNvbW1vblwiXG5dKTsiLCJhbmd1bGFyLm1vZHVsZSgnc3JhLmNvbnRyb2xsZXInLCBbXG4gICAgJ3NyYS5jb250cm9sbGVyLmNwdSdcbl0pOyIsImFuZ3VsYXIubW9kdWxlKCdzcmEuZGlyZWN0aXZlJywgW10pOyIsImFuZ3VsYXIubW9kdWxlKCdzcmEucm91dGVyJywgW1xuICAgICdzcmEucm91dGVyLmNvbW1vbidcbl0pOyIsImFuZ3VsYXIubW9kdWxlKCdzcmEuc2VydmljZScsIFtcbiAgICAnc3JhLnNlcnZpY2UuY29tbXVuaWNhdGlvbidcbl0pOyIsImFuZ3VsYXIubW9kdWxlKCdzcmEucm91dGVyLmNvbW1vbicsIFtcbiAgICAnc3JhLnJvdXRlci5jb21tb24uY3RybC5sb2dpbidcbl0pLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgdmFyIGRlZmF1bHRfcm91dGVyID0gXCIvbG9naW5cIjtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlclxuICAgIC8vIC53aGVuKCcvbG9naW4vJywgZGVmYXVsdF9yb3V0ZXIpXG4gICAgICAgIC5vdGhlcndpc2UoZGVmYXVsdF9yb3V0ZXIpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJsb2dpblwiLCB7XG4gICAgICAgIHVybDogXCIvbG9naW5cIixcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwicm91dGVyUGFnZXMvc3JhLmxvZ2luLmh0bWxcIixcbiAgICAgICAgY29udHJvbGxlcjogJ3NyYVJvdXRlckNvbW1vbkN0cmxMb2dpbicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3NyYVJvdXRlckNvbW1vbkN0cmxMb2dpbidcbiAgICB9KTtcblxuICAgIC8vICAgICAuc3RhdGUoXCJkYXNoYm9hcmRcIiwge1xuICAgIC8vICAgICAgICAgdXJsOiBcIi9kYXNoYm9hcmRcIixcbiAgICAvLyAgICAgICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3BhZ2VfZGFzaGJvYXJkLmh0bWxcIixcbiAgICAvLyAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc2NvcGUsIFNSQV9DT05TVEFOVF9DT01NT04pIHtcbiAgICAvLyAgICAgICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZSBtb2RlbHMgZnJvbSBjaGlsZCByb3V0ZXIsIHRoZW4gdXBkYXRlIGN1cnJlbnQgc2NvcGUgbW9kZWxzLlxuICAgIC8vICAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKFNSQV9DT05TVEFOVF9DT01NT04uRVZFTlRfVFlQRVMuUFZfQ0hBTkdFX0xPR0lOX1JPVVRFUl9NT0RFTFMsIGZ1bmN0aW9uIChldnQsIHJvdXRlck1vZGVscykge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJvdXRlck1vZGVscyA9IHJvdXRlck1vZGVscztcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KS5zdGF0ZShcImRhc2hib2FyZC51bml0TGlzdFwiLCB7XG4gICAgLy8gICAgIHVybDogXCIvdW5pdExpc3RcIixcbiAgICAvLyAgICAgdmlld3M6IHtcbiAgICAvLyAgICAgICAgICdwdk1haW5CbGFua1dyYXBwZXInOiB7XG4gICAgLy8gICAgICAgICAgICAgdGVtcGxhdGU6IFwiXCIsXG4gICAgLy8gICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRyb290U2NvcGUsIFNSQV9DT05TVEFOVF9DT01NT04pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBhcmVudCByb3V0ZXIgbW9kZWwuXG4gICAgLy8gICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdChTUkFfQ09OU1RBTlRfQ09NTU9OLkVWRU5UX1RZUEVTLlBWX0NIQU5HRV9MT0dJTl9ST1VURVJfTU9ERUxTLCB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0YWc6IFwiXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ3NyYS5zZXJ2aWNlLmNvbW11bmljYXRpb24nLCBbXSlcbiAgICAuZmFjdG9yeSgnc3JhU2VydmljZUNvbW11bmljYXRpb24nLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIENvbW11bmljYXRpb24oKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIENvbW11bmljYXRpb24ucHJvdG90eXBlID0ge307XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb21tdW5pY2F0aW9uKCk7XG4gICAgfV0pOyIsIihmdW5jdGlvbihtb2R1bGUpIHtcbnRyeSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzcmEudGVtcGxhdGVDYWNoZScpO1xufSBjYXRjaCAoZSkge1xuICBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnc3JhLnRlbXBsYXRlQ2FjaGUnLCBbXSk7XG59XG5tb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbW1vbkNvbXBvbmVudHMvc3JhLnRlc3QuaHRtbCcsXG4gICAgJzxkaXY+dGVzdDwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3NyYS50ZW1wbGF0ZUNhY2hlJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzcmEudGVtcGxhdGVDYWNoZScsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgncm91dGVyUGFnZXMvc3JhLmxvZ2luLmh0bWwnLFxuICAgICc8ZGl2IGNsYXNzPVwic3JhX2xvZ2luX3BhZ2VcIj48ZGl2IGNsYXNzPVwic3JhX2xvZ2luX3BhZ2VfaGVhZGVyXCI+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2hlYWRlcl9sZWZ0X2NvbnRhaW5lciBzcmFfY2xlYXJmaXhcIj48aW1nIGNsYXNzPVwic3JhX2ZfbFwiIHNyYz1cImljb25zL2xvZ28ucG5nXCI+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2hlYWRlcl9sZWZ0X3RleHQgc3JhX2ZfbFwiPlN0b2NrIFJlY29yZCBBbmFseXNpcyBTeXN0ZW08L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwic3JhX2xvZ2luX3BhZ2VfbWlkZGxlX2NvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJzcmFfbG9naW5fcGFnZV9sb2dpbl9wYXJ0XCI+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2xvZ2luX3BhcnRfaGVhZGVyXCI+55So5oi355m75b2VPC9kaXY+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2xvZ2luX3BhcnRfY29udGVudFwiPjxkaXYgY2xhc3M9XCJzcmFfbG9naW5fcGFnZV9sb2dpbl9wYXJ0X2NvbnRlbnRfaW5wdXRfY29udGFpbmVyIHNyYV9jbGVhcmZpeFwiPjxkaXYgY2xhc3M9XCJzcmFfbG9naW5faWNvbiBzcmFfZl9sIGZhIGZhLXVzZXIgZmEtbGcgZmEtZndcIj48L2Rpdj48aW5wdXQgY2xhc3M9XCJzcmFfbG9naW5faW5wdXQgc3JhX2ZfbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLkvJrlkZjlj7cv6YKu566xXCI+PC9kaXY+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2xvZ2luX3BhcnRfY29udGVudF9pbnB1dF9jb250YWluZXIgc3JhX2NsZWFyZml4XCI+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9pY29uIHNyYV9mX2wgZmEgZmEtbG9jayBmYS1sZyBmYS1md1wiPjwvZGl2PjxpbnB1dCBjbGFzcz1cInNyYV9sb2dpbl9pbnB1dCBzcmFfZl9sXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLlr4bnoIFcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3JhX2xvZ2luX3BhZ2VfbG9naW5fcGFydF9jb250ZW50X290aGVyX2NvbnRhaW5lciBzcmFfY2xlYXJmaXhcIj48YSBjbGFzcz1cInNyYV9mX2xcIj7lv5jorrDnmbvlvZXlr4bnoIE/PC9hPiA8YSBjbGFzcz1cInNyYV9mX3JcIj7lhY3otLnms6jlhow8L2E+PC9kaXY+PGRpdiBjbGFzcz1cInNyYV9sb2dpbl9wYWdlX2xvZ2luX3BhcnRfY29udGVudF9idXR0b24gc3JhX3RfY1wiPueZuyZuYnNwOyZuYnNwO+W9lTwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PicpO1xufV0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKG1vZHVsZSkge1xudHJ5IHtcbiAgbW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3NyYS50ZW1wbGF0ZUNhY2hlJyk7XG59IGNhdGNoIChlKSB7XG4gIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdzcmEudGVtcGxhdGVDYWNoZScsIFtdKTtcbn1cbm1vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zcmEudGVzdC5odG1sJyxcbiAgICAnPGRpdj50ZXN0PC9kaXY+Jyk7XG59XSk7XG59KSgpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ3NyYS5yb3V0ZXIuY29tbW9uLmN0cmwubG9naW4nLCBbXSlcbiAgICAuY29udHJvbGxlcignc3JhUm91dGVyQ29tbW9uQ3RybExvZ2luJywgWyckcm9vdFNjb3BlJywgJyRzY29wZScsICdTUkFfQ09OU1RBTlRfQ09NTU9OJyxcbiAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzY29wZSwgU1JBX0NPTlNUQU5UX0NPTU1PTikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLnZtID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidGVzdGluZyBsb2dpbiBwYWdlLi4uXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLmludGVybmFsID0ge307XG4gICAgICAgIH1dKTsiXX0=
