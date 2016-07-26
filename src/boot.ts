/// <reference path="../typings/tsd.d.ts" />

/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-ui-router"/>
/// <amd-dependency path="restangular"/>
/// <amd-dependency path="angular-bootstrap"/>
/// <amd-dependency path="angular-bootstrap-tpls"/>


'use strict';

export class Application {
    public static APP_NAME : string = "ehrs-spa";

    public static DEPENDENCIES : string[] =
                      [
                          "ui.router" ,
                          "restangular" ,
                          "ui.bootstrap"
                      ];

    public bootstrap() : void {

        this.initModules();
        angular.module(Application.APP_NAME , Application.DEPENDENCIES);

        /*bootstrap the application*/
        angular.bootstrap(document , [Application.APP_NAME], {strictDi: false});
    }

    private initModules() : void {

    }
}

new Application().bootstrap();