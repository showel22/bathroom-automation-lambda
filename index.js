'use strict';

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
            break;
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