const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'cults';

const Cult = sequelize.define('Cult', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  year: {
    type: Sequelize.STRING,
  },
  
  admArea:{
    type: Sequelize.STRING,
  },
  district: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  securityStatus: {
    type: Sequelize.STRING,
  },
 
 


  
}, { tableName });

module.exports = Cult;
