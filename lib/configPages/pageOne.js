'use strict';

module.exports = {

    createPage : function(){
        console.log("running createPage one");
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
        };
    }
};