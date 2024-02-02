const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Attendance = sequelize.define('attendance',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'absent', // Default to absent, change as needed
  }
});

module.exports = Attendance;