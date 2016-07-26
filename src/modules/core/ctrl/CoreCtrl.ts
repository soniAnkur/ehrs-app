'use strict';

class CoreCtrl implements CoreModule.ICoreCtrl {

    public static ID: string = 'core_ctrl';
    public static CONTROLLER_AS_ID: string = 'vmCore';
    public static $inject: string[] = [];

    public constructor() {
        console.log('core controller instanciated');
    }

    public prepareVM() : void {

    }


}