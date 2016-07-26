'use strict';

class CoreConfig {
    public static $inject: string[] =
                      [
                          "$stateProvider" ,
                          "$urlRouterProvider" ,
                          "$locationProvider"
                      ]

    public constructor(private $statProvider: ui.IstateProvider,
                       private $urlRouterProvider: any,
                       private $locationProvider: any) {

    }

}