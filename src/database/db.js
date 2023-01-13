const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize('ferreteria', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
})

exports.sequelize = sequelize;