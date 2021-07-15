const responses = require('./APIresponse')

exports.handler = async event => {
    console.log('event', event)
    if(!event.pathParameters || !event.pathParameters.ID){
        return responses._400({message: 'No ID mentioned in path parameters or no path parameter specified'})
    }

    let ID = event.pathParameters.ID;
    if(usrList[ID]){
        return responses._200(usrList[ID])
    }
    return responses._400({message : 'Invalid ID.'}); //usrList has no specified ID
};

const usrList = {
    1 : { name : 'yashu', age : 20 },
    2 : { name : 'AB', age : 37 },
    3 : { name : 'VK', age : 32 },
    4 : { name : 'Dale', age : 36 },
    5 : { name : 'KP', age : 40 }
};