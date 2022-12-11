const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  logging: console.log,
  storage: path.resolve(__dirname, '../data/database.sqlite'),
});

// Test DB Connection on start up
sequelize
  .authenticate()
  .then(() => console.log('Successfull connection to DB'))
  .catch(console.error);

//TODO: extract models
const User = sequelize.define('user', {
  guid: {
    type: DataTypes.UUIDV4,
    defaultValue: uuidv4(),
    allowNull: false,
    unique: true,
  },
  name: DataTypes.TEXT,
});

/* example user create
(async function () {
  await sequelize.sync({ alter: true, force: false }); //! REMOVE ALTER AND FORCE BEFORE PROD
  let response = await User.create({ name: 'dan' }).catch(console.error);
  console.log('response:', response);
})(); 
*/

module.exports = {
  conn: sequelize,
  User,
};
