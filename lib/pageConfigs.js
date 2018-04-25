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
                name: 'Bathroom Sensors',
                nextPageId: '2',
                previousPageId: null,
                complete: null,
                sections: [
                    {
                        name: 'Getting Started',
                        settings: [
                            {
                                id: 'doorSensor',
                                name: 'Please choose your bathroom door sensor...',
                                description: 'Tap to set',
                                type: 'DEVICE',
                                required: true,
                                multiple: false,
                                capabilities: ['contactSensor'],
                                permissions: ['r', 'x']
                            },
                            {
                                id: 'motionSensor',
                                name: 'Please choose your bathroom motion sensor...',
                                description: 'Tap to set',
                                type: 'DEVICE',
                                required: true,
                                multiple: false,
                                capabilities: ['motionSensor'],
                                permissions: ['r', 'x']
                            },
                            {
                                id: 'lightType',
                                name: 'What type of light(s) do you have in your bathroom?',
                                description: "Tap to set",
                                type: "ENUM",
                                required: true,
                                multiple: false,
                                options: [
                                    {
                                        id: "switch",
                                        name: "On/Off"
                                    },
                                    {
                                        id: "colorControl",
                                        name: "Color"
                                    },
                                    {
                                        id: "switchLevel",
                                        name: "Dimmer"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }

        case 2: {
            return {
                pageId: '2',
                name: "Bathroom Lights",
                nextPageId: '3',
                previousPageId: '1',
                complete: false,
                sections: [
                    {
                        name: 'Light Calibration:',
                        settings: [
                            {
                                id: 'bathroomLights',
                                name: 'Please choose your bathroom lights...',
                                description: 'Tap to set',
                                type: 'DEVICE',
                                required: true,
                                multiple: true,
                                capabilities: ['colorControl'],
                                permissions: ['r', 'x']
                            },
                            {
                                id: 'daytimeBrightnessLevel',
                                name: 'Day Time Brightness Level:',
                                description: 'Tap to set',
                                type: 'ENUM',
                                required: true,
                                defaultValue: 70,
                                options: [
                                    {
                                        id: 10,
                                        name: '10%'
                                    },
                                    {
                                        id: 20,
                                        name: '20%'
                                    },
                                    {
                                        id: 30,
                                        name: '30%'
                                    },
                                    {
                                        id: 40,
                                        name: '40%'
                                    },
                                    {
                                        id: 50,
                                        name: '50%'
                                    },
                                    {
                                        id: 60,
                                        name: '60%'
                                    },
                                    {
                                        id: 70,
                                        name: '70%'
                                    },
                                    {
                                        id: 80,
                                        name: '80%'
                                    },
                                    {
                                        id: 90,
                                        name: '90%'
                                    },
                                    {
                                        id: 100,
                                        name: '100%'
                                    }
                                ]
                            },
                            {
                                id: 'daytimeColor',
                                name: 'Please choose your daytime color?',
                                description: 'Tap to set',
                                type: 'ENUM',
                                required: true,
                                multiple: false,
                                options: [
                                    {
                                        id: 'softWhite',
                                        name: 'Soft White'
                                    },
                                    {
                                        id: 'warmWhite',
                                        name: 'Warm White'
                                    },
                                    {
                                        id: 'daylight',
                                        name: 'Daylight'
                                    },
                                    {
                                        id: 'white',
                                        name: 'White'
                                    },
                                    {
                                        id: 'red',
                                        name: 'Red'
                                    },
                                    {
                                        id: 'blue',
                                        name: 'Blue'
                                    },
                                    {
                                        id: 'orange',
                                        name: 'Orange'
                                    },
                                    {
                                        id: 'pink',
                                        name: 'Pink'
                                    },
                                    {
                                        id: 'purple',
                                        name: 'Purple'
                                    },
                                    {
                                        id: 'green',
                                        name: 'Green'
                                    },
                                    {
                                        id: 'yellow',
                                        name: 'Yellow'
                                    }

                                ]
                            }
                        ]
                    }
                ]
            };
        }

        case 3:{
            return {
                pageId: '3',
                name: "Set your times",
                nextPageId: null,
                previousPageId: '2',
                complete: false,
                sections: [
                    {
                        name: 'Time Setup',
                        settings: [
                            {
                                id: 'openDoorMins',
                                name: 'How long should the bathroom lights stay on when someone goes in' +
                                 'and does not shut the door.',
                                description: 'Tap to set',
                                type: 'DECIMAL',
                                required: true,
                                multiple: false,
                                defaultValue: 3
                            },
                            {
                                id: 'closeDoorMins',
                                name: 'How long should the bathroom lights stay on when someone goes in' +
                                    'and shuts the door.',
                                description: 'Tap to set',
                                type: 'DECIMAL',
                                required: true,
                                multiple: false,
                                defaultValue: 30
                            },
                            {
                                id: 'leaveMins',
                                name: 'How long should the lights stay on when someone leaves the bathroom?',
                                description: 'Tap to set',
                                type: 'DECIMAL',
                                required: true,
                                multiple: false,
                                defaultValue: .5
                            },
                            {
                                id: 'warning',
                                name: 'Do you want a warning flash before the lights go out?',
                                description: 'Tap to set',
                                type: 'BOOLEAN',
                                required: true,
                                multiple: false,
                                defaultValue: false
                            },
                            {
                                id: 'warningTimer',
                                name: 'How many minutes before the lights turn off do you want to be warned?',
                                description: 'Tap to set',
                                type: 'DECIMAL',
                                required: false,
                                defaultValue: 5
                            }

                        ]
                    }
                ]
            };
        }
    }

}