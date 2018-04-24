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
            return {
                pageId: '1',
                name: 'Sensors'
            }
        }
    }

}