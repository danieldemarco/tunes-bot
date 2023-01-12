const path = require('node:path');
const { v4: uuidv4 } = require('uuid');
const { Sequelize, Model, DataTypes } = require('sequelize');

//Import all models
const { User } = require('./models/user')
const { Round } = require('./models/round')
const { Submission } = require('./models/submission')
const { Vote } = require('./models/vote')
const { Matchup } = require('./models/matchup')

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


// Initialize Tables
await User.sync();
await Round.sync();
await Matchup.sync();
await Submission.sync();
await Vote.sync();
// TODO: finish defining models and initializing tables




module.exports = {
  conn: sequelize,
  User,
  Round,
  Submission,
  Vote,
  Matchup
};
