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
}, {
  tableName: "Players"
});

(async () => {
  await sequelize.sync({force: true, alter: true});
  const curt = User.create({discordid: "CurtisBoBurtis#9510", name: "Curt", emoji: ":turtle:"});
  const katie = User.create({discordid: "keg7952#6477", name: "Katie", emoji: ":otter:"});
  const dan = User.create({discordid: "sudo#9658", name: "Dan", emoji: ":moyai:"});
  const amanda = User.create({discordid: "ginganinja9695#1092", name: "Amanda", emoji: ":taco:"});
  
  const allPlayers = await User.findAll({
    attributes: ['name']
  });
  console.log("All users: ", JSON.stringify(allPlayers, null, 2));
  console.log(allPlayers[0].name);
})();

// // example user create
// (async function () {
//   await sequelize.sync({ alter: true, force: true }); //! REMOVE ALTER AND FORCE BEFORE PROD
//   let response = await User.create({discordid: "CurtisBoBurtis", name: "Curt", emoji: ":turtle:"}).catch(console.error);
//   response = await User.create({discordid: "poopy"});
//   console.log('response:', response);
//   console.log(curt.toJSON());
// })(); 

module.exports = {
  conn: sequelize,
  User,
};
