const responses = require('./APIresponse_insertUser');

const sequelize = require('../DbUtility');

const Employee = require('../models/employee');
const { _200 } = require('./APIresponse_insertUser');
const moment = require('moment');



exports.handler = async event => {
    
    // if(!event.pathParameters || !event.pathParameters.user_obj){
    //     return "Invalid path parameters";
    // }
    //let usr_obj = event.pathParameters.user_obj;
    let usr_obj = JSON.parse(event.body);
    console.log(usr_obj);

    Name = usr_obj.name;
    Desc = usr_obj.desc;
    //Dob = moment().format(usr_obj);
    Dob = moment().format(usr_obj.dob);
    Gender = usr_obj.gender;
    Profile_pic = usr_obj.profile_pic;
    Cover_pic = usr_obj.cover_pic;
    Job_title = usr_obj.job_title;

    console.log(Name+Desc+Gender);

    try{
        const sam = await Employee.create({ name : `${Name}`, desc : `${Desc}`, dob : `${Dob}`, gender : `${Gender}`, profile_pic : `${Profile_pic}`, cover_pic : `${Cover_pic}`, job_title : `${Job_title}`});
        console.log(sam);
        return responses._200({message : "success"});
    }catch(err){
        console.log(err);
        return responses._400({message : "failed"});
    }
}


        // sequelize.sync({force : true})
    // .then(response => {
    //     Employee.create({ name : 'Yashu2', desc : 'Fresher', dob : new Date(), gender : 'Male', profile_pic : 'profile here', cover_pic : 'cover pic here', job_title : 'Software Engineer'});
    // }).catch(err =>{
    //     console.log(err);
    // });

    // Employee = { name : 'Yashu2', desc : 'Fresher', dob : new Date(), gender : 'Male', profile_pic : 'profile here', cover_pic : 'cover pic here', job_title : 'Software Engineer'};

    // sequelize.sync(Employee);


        // const sam = await Employee.create({ name : `${Name}`, desc : `${Desc}`, dob : `${Dob}`, gender : `${Gender}`, profile_pic : `${Profile_pic}`, cover_pic : `${Cover_pic}`, job_title : `${Job_title}`}).then(resposne => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error);
        // });

        // sequelize.add([Employee]);

        // sequelize.sync({force : true})
        // .then(response => {
        //     const sam = Employee.create({ name : 'Yashu2', desc : 'Fresher', dob : new Date(), gender : 'Male', profile_pic : 'profile here', cover_pic : 'cover pic here', job_title : 'Software Engineer'}).save();
        //     console.log(sam);
        // }).catch(err =>{
        //     console.log(err);
        // });

    // sequelize.sync({force : true})
    // .then(response => {
    //     Employee.create({ name : `${Name}`, desc : `${Desc}`, dob : `${Dob}`, gender : `${Gender}`, profile_pic : `${Profile_pic}`, cover_pic : `${Cover_pic}`, job_title : `${Job_title}`});}).then(res => {
    //         console.log(res);
    // }).catch(err =>{
    //     console.log(err);
    // });

    // const res = empService(usr_obj);

    // if(res === 'success'){
    //     return responses._200({message : "successfully inserted"});
    // }
    // else{
    //     return responses._400({message : "insertion failed"});
    // }