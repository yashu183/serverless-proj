const Sequelize = require('sequelize');
const sequelize = require('../DbUtility');

const Employee = sequelize.define("employees", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    desc : {
        type : Sequelize.STRING,
        allowNull : false
    },
    dob : {
        type : Sequelize.DATE,
        allowNull : false
    },
    gender : {
        type : Sequelize.STRING,
        allowNull : false
    },
    profile_pic : {
        type : Sequelize.STRING,
        allowNull : false
    },
    cover_pic :{
        type : Sequelize.STRING,
        allowNull : false
    },
    job_title : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = Employee;