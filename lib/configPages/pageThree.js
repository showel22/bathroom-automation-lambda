'use strict';

module.exports = {
    
    createPage : function(){
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
};