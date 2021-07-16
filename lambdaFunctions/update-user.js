const responses = require('./APIresponse_updateUser');

const Employee = require('../models/employee');

const moment = require('moment');

exports.handler = async event => {

    if(!event.pathParameters || !event.pathParameters.id){
        return responses._400({message : "id is missing pls provide id"});
    }

    let Id = event.pathParameters.id;
    let usr_obj = JSON.parse(event.body);

    console.log(Id + usr_obj);

    Name = usr_obj.name;
    Desc = usr_obj.desc;
    Dob = moment().format(usr_obj.dob);
    Gender = usr_obj.gender;
    Profile_pic = usr_obj.profile_pic;
    Cover_pic = usr_obj.cover_pic;
    Job_title = usr_obj.job_title;

    try{
        const sam = await Employee.update({
            name : `${Name}`, desc : `${Desc}`, dob : `${Dob}`, gender : `${Gender}`, profile_pic : `${Profile_pic}`, cover_pic : `${Cover_pic}`, job_title : `${Job_title}`
        }, {
            where : {
                id : Id
            }
        });
        return responses._200({message : "successfully updated"});
    }catch(error){
        console.log(error);
        return responses._400({message : "updation failed"});
    }
}