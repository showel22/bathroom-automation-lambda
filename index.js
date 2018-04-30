'use strict';

const prettyjson = require('prettyjson');
const pageConfig = require('./lib/pageConfigs');

// Lambda insertion point
exports.handler = async (event) => {
    console.log("From Smartthings \n" + prettyjson.render(event, {}));
    let result = handleRequest(event);
    console.log('Data sent back to smartthings:');
    console.log(prettyjson.render(result, {}));



    return result;
};

// This function will decide what to do with the request.
function handleRequest(event){
    let lifecycle = event.lifecycle;
    let response;
    
    switch(lifecycle){
        case 'PING':{
            console.log('Running the ping case.');
            let chal = event.pingData.challenge;
            return {
                statusCode: 200,
                pingData:{
                    challenge: chal
                }
            };
        }
        
        case 'CONFIGURATION':{
            console.log('Running the configuration case.');
            response = pageConfig.handle(event.configurationData);
            return {
                statusCode: 200,
                configurationData: response
            };
        }
        
        case 'INSTALL':{
            console.log('Running the Install case.');
            let token = event.installData.authToken;

            break;
        }
        
        case 'UPDATE':{
            console.log('Running the Update case.');
            break;
        }
        
        case 'UNINSTALL':{
            console.log('Running the Uninstall case.');
            break;
        }
        
        case 'EVENT':{
            console.log('Running the Event case.');
            break;
        }
        
        default:{
            console.log(`Lifecycle ${lifecycle} not supported`);
        }
    }
}