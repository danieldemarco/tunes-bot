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
  // guid: {
  //   type: DataTypes.UUIDV4,
  //   defaultValue: uuidv4(),
  //   allowNull: false,
  //   unique: true,
  // },
  discordid: DataTypes.TEXT,
  name: DataTypes.TEXT,
  emoji: DataTypes.TEXT,
  // round1: DataTypes.ARRAY,
  // round2: DataTypes.ARRAY,
  // round3: DataTypes.ARRAY,
  // round4: DataTypes.ARRAY,
  // round5: DataTypes.ARRAY,
  // round6: DataTypes.ARRAY,
  // round7: DataTypes.ARRAY,
  // round8: DataTypes.ARRAY,
}, {
  tableName: "Players"
});

(async () => {
  await sequelize.sync({force: true, alter: true}); // REMOVE ALTER AND FORCE BEFORE PROD
  const curt = User.create({discordid: "CurtisBoBurtis#9510", name: "Curt", emoji: ":turtle:"});
  const katie = User.create({discordid: "keg7952#6477", name: "Katie", emoji: ":otter:"});
  const dan = User.create({discordid: "sudo#9658", name: "Dan", emoji: ":moyai:"});
  const amanda = User.create({discordid: "ginganinja9695#1092",name: "Amanda", emoji: ":taco:"});

  const allPlayers = await User.findAll({
    attributes: ['name']
  });

})();

module.exports = {
  conn: sequelize,
  User,
};
