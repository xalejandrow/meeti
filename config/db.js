const Sequalize = require('sequelize');

module.exports = new Sequalize('meeti', 'admin', 'admin', {
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    pool : {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
});
