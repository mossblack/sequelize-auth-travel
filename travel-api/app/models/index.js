const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'travel_api_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.travel = require('./travel.model.js')(sequelize, Sequelize);

module.exports = db;