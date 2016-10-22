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
}]);