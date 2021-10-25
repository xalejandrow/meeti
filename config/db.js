const Sequelize = require('sequelize');

// module.exports = new Sequelize('meeti', 'admin', 'admin', {
//     host: '172.24.0.2',
//     port: '5432',
//     dialect: 'postgres',
//     pool : {
//         max: 5,
//         min: 0,
//         aquire: 30000,
//         idle: 10000
//     },
//     // logging :false
// });

const sequelize = new Sequelize('meeti', 'admin', 'admin', {
    host: 'backoffice_db',
    port: '5432',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    },
    // dialectOptions: {
    //     ssl: {
    //       require: true,
    //       rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    //     }
    // }
    // logging :false
});

module.exports = sequelize;
