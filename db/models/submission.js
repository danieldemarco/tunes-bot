const { DataTypes } = require("sequelize");

const Submission = sequelize.define('submission', {
  submissionID: DataTypes.UUID, // Primary ID
  songTitle: DataTypes.STRING,
  songArtist: DataTypes.STRING,
  songURL: DataTypes.STRING,
  votesFor: DataTypes.INTEGER,
  votesAgainst: DataTypes.INTEGER,
  userID: DataTypes.STRING,
  roundID: DataTypes.STRING,
  matchupID: DataTypes.STRING,
}, {
  tableName: "Submission"
});

module.exports = {
  Submission
}