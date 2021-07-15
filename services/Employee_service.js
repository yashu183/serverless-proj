const sequelize = require('../DbUtility');

const Employee = require('../models/employee');

function insertData(usr_obj){

    Name = usr_obj.name;
    Desc = usr_obj.desc;
    Dob = new Date(usr_obj.dob);
    Gender = usr_obj.gender;
    Profile_pic = usr_obj.profile_pic;
    Cover_pic = usr_obj.cover_pic;
    Job_title = usr_obj.job_title;

    console.log(Name+Desc+Gender);

    sequelize.sync({force : true})
    .then(response => {
        const sam = Employee.create({ name : 'Yashu2', desc : 'Fresher', dob : new Date(), gender : 'Male', profile_pic : 'profile here', cover_pic : 'cover pic here', job_title : 'Software Engineer'}).save();
        console.log(sam);
    }).catch(err =>{
        console.log(err);
    });
    return 'success';
}

module.exports = insertData();