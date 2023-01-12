const { DataTypes } = require("sequelize");

const vote = sequelize.define('vote', {
  voteID: DataTypes.UUID,
  voterID: DataTypes.STRING, // Discord ID of the user that voted
  submissionID: DataTypes.STRING, // ID of the submission the vote is going toward
  roundID: DataTypes.STRING, // ID of the current round
}, {
  tableName: "Vote"
});

module.exports = {
  Vote
}