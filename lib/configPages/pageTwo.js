'use strict';

const prettyjson = require('prettyjson');

module.exports = {

    createPage: function(currentConfig){
        let bulbType = currentConfig[0].lightType[0].stringConfig.value;
        console.log('The current bulb type is' +  prettyjson.render(bulbType, {}));
        let pageTwoObject = {
            pageId: '2',
            name: "Bathroom Lights",
            nextPageId: '3',
            previousPageId: '1',
            complete: false,
            sections: [
                {
                    name: 'Light Calibration',
                    settings: [
                        {
                            id: 'bathroomLights',
                            name: 'Please choose your bathroom lights...',
                            description: 'Tap to set',
                            type: 'DEVICE',
                            required: true,
                            multiple: true,
                            capabilities: bulbType,
                            permissions: ['r', 'x']
                        }
                    ]
                },
                {
                    name: 'Warning',
                    settings: [
                        {
                            id: 'warning',
                            name: 'Do you want a warning flash before your lights go out?',
                            description: 'Yes or No',
                            type: 'Boolean',
                            required: true,
                            multiple: false,
                            defaultValue: false
                        }
                    ]
                }
            ]
        };

        if(bulbType != 'switch'){

            pageTwoObject.sections.push(
                {
                    name: 'Nighttime Settings',
                    settings: [
                        {
                            id: 'diffAtNight',
                            name: 'Do you want different settings at night?',
                            description: 'Yes or No',
                            type: 'Boolean',
                            required: true,
                            multiple: false,
                            defaultValue: false
                        }
                    ]
                }
            );

            pageTwoObject.sections[0].settings.push(
                {
                    id: 'daytimeBrightnessLevel',
                    name: 'Brightness Level:',
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
                }
            );
        }

        if(bulbType == 'colorControl'){
            pageTwoObject.sections[0].settings.push(
                {
                    id: 'daytimeColor',
                    name: 'Please choose your light color?',
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
            );
        }



        return pageTwoObject;
    }
};