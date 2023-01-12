const { DataTypes } = require("sequelize");

const Round = sequelize.define('round', {
  roundid: DataTypes.TEXT, // Primary ID
  theme: DataTypes.TEXT,
  submissionsActive: DataTypes.BOOLEAN,
  votingActing: DataTypes.BOOLEAN,
}, {
  tableName: "Round"
});


module.exports = {
  Round
}