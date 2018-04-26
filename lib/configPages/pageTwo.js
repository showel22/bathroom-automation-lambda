'use strict';

export function createPage(){

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