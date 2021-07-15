const Sequelize = require('sequelize');
const sequelize = new Sequelize('kibbitz_db', 'admin', 'rootroot', {
    dialect : 'mysql',
    host : 'database-2.coruaa6qnwci.us-east-1.rds.amazonaws.com'
});

module.exports = sequelize;