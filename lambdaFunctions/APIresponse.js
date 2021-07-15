const responses = {
    _200(usrList = {}){
        return {
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Methods' : '*',
                'Access-Control-Allow-Origin' : '*',
            },
            statusCode : 200,
            body : JSON.stringify(usrList),
        }
    },

    _400(usrList = {}){
        return {
            headers:{
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Methods' : '*',
                'Access-Control-Allow-Origin' : '*'
            },
            statusCode : 400,
            body : JSON.stringify(usrList),
        }
    }
};

module.exports = responses; 