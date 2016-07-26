///reference path="./CoreModule.d.ts" />

import CoreCtrl = require('core/ctrl/CoreCtrl');
import CoreCtrl = require('core/CoreConfig');

'use strict';

class CoreModule implements CoreModule.IBaseModule {

    public static ID: string = 'core_module';
    public static DEPENDENCIES: string[] =
        [
            "ui.router" ,
            "restangular" ,
            "ui.bootstrap"
        ];

    public static initModule() {
        angular.module(CoreModule.ID, CoreModule.DEPENDENCIES);

        angular.module(CoreModule.ID)
        .controller(CoreCtrl.ID, CoreCtrl)
        .config(CoreConfig)

    }
}

export = CoreModule;