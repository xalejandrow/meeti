console.log('hola');
const  Sequelize  = require('sequelize');
const db = require('./config/db');

const sequelize = new Sequelize('meeti', 'admin', 'admin', {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres'
});


const test = function(){

  try {
    db.authenticate();
    console.log('Connection has been established successfully.');
    db.sync().then(() => console.log('DB Conectada')).catch((error) => console.log(error));
 } catch (error) {
    console.error('Unable to connect to the database:', error);
 }
};

test();



