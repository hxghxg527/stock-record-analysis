angular.module('sra.constant.common', [])
    .constant('SRA_CONSTANT_COMMON', {
        APP_NAME: "Stock Record Analysis System",
        EVENT_TYPES: {
            PV_CHANGE_LOGIN_ROUTER_MODELS: "pv_change_login_router_models"
        },
        ROUTER_STATES: {
            LOGIN: "login"
        }
    });