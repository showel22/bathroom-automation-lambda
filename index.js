'use strict';

const pageConfig = require('./lib/pageConfigs');

// Lambda insertion point
exports.handler = async (event) => {

    return handleRequest(event);

};

// This function will decide what to do with the request.
function handleRequest(event){
    let lifecycle = event.lifecycle;
    let response;
    
    switch(lifecycle){
        case 'PING':{
            let chal = event.pingData.challenge;
            return {
                statusCode: 200,
                pingData:{
                    challenge: chal
                }
            };
        }
        
        case 'CONFIGURATION':{
            response = pageConfig.handle(event.configurationData);
            return {
                statusCode: 200,
                configurationData: response
                
            };
        }
        
        case 'INSTALL':{
            break;
        }
        
        case 'UPDATE':{
            break;
        }
        
        case 'UNINSTALL':{
            break;
        }
        
        case 'EVENT':{
            break;
        }
        
        default:{
            console.log(`Lifecycle ${lifecycle} not supported`);
        }
    }
}