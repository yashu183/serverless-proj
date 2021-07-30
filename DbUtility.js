const Sequelize = require('sequelize');
const sequelize = new Sequelize('kibbitz', 'admin', 'adminuser', {
    dialect : 'mysql',
    host : 'kibbitz-db.cdgkfoacvf6u.us-east-1.rds.amazonaws.com'
});


module.exports = sequelize;