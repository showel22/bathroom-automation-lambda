'use strict';

module.exports = {

    handle: function(installedApp, authToken){
        let contactSensor = installedApp.config.doorSensor[0].deviceConfig;
        let motionSensor = installedApp.config.motionSesor[0].deviceConfig;
    }

};