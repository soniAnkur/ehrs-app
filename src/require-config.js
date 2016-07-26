/// <reference path="../../typings/tsd.d.ts"/>

require.config({
     paths: {
        angular: "../node_modules/angular/angular",
        "angular-ui-router": "../node_modules/angular-ui-router/release/angular-ui-router",
        "angular-bootstrap": "../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls",
        "angular-bootstrap-tpls": "../node_modules/angular-ui-bootstrap/dist/ui-bootstrap",
        "restangular": "../node_modules/restangular/src/restangular",
        "underscore": "../node_modules/underscore/underscore"
    },
    shim: {
        "angular": {
            exports: "angular"
        },

        "angular-ui-router": ["angular"],

        "angular-bootstrap-tpls": {
            deps: ["angular"]
        },

        "angular-bootstrap": {
            deps: ["angular", "angular-bootstrap-tpls"]
        },

        "restangular": {
            deps: ["underscore", "angular"]
        }
    },

    deps: [
        "./boot"
    ]
});
