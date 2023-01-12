const { DataTypes } = require("sequelize");

const Matchup = sequelize.define('matchup', {
  matchupID: DataTypes.STRING,
  song1ID: DataTypes.STRING,
  song2ID: DataTypes.STRING,
  roundID: DataTypes.STRING,
}, {
  tableName: "Matchup"
});

module.exports = {
  Matchup
}