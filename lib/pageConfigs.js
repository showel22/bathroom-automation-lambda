'use strict';

const pageOne = require('./configPages/pageOne');
const pageTwo = require('./configPages/pageTwo');
const pageThree = require('./configPages/pageThree');

/**
 * Creates application info for the installed smartApp
 * and tells the application what page to start on.
 */
function createInnitialConfig(){
    return {
        name: "Ultimate Bathroom Automation",
        description: "This application uses a door contact sensor, motion sensor and smart" +
            " lights/switches to prevent you from ever showering in the dark again. You" +
            " can also set up shower timers and warnings to let you know before the lights" + 
            " go out. As well as different color and dimmer configurations for day and night.",
        id: 'UBA',
        permissions:['r:schedules','w:schedules'],
        firstPageId: '1'
    };
}

function createConfigPage(pageId, currentConfig){

    switch(pageId){
        case 1:{
            return pageOne.createPage(); 
        }

        case 2: {
            return pageTwo.createPage();
        }

        case 3:{
            return pageThree.createPage();
        }
    }

}

module.exports = {
    handle: function(event){
        if(!event){
            throw new Error('No config section set in request.');
        }
    
        let config = {};
        const phase = event.phase;
        const pageId = event.pageId;
        const settings = event.settings;
        switch(phase){
            case 'INNITIALIZE':
                config.innitialize = createInnitialConfig();
                break;
            case 'PAGE':
                config.page = createConfigPage(pageId, settings);
                break;
            default:
                throw new Error(`Unsupported config phase: ${phase}`);
                break;
        }
        return config;
    }
};