const { DataTypes } = require("sequelize");

const User = sequelize.define('user', {
  discordid: DataTypes.TEXT, // Primary ID  
  name: DataTypes.TEXT,
  emoji: DataTypes.TEXT,
  totalPoints: DataTypes.DOUBLE,
}, {
  tableName: "User"
});

function createUser() {
   console.log("User Created")
}

module.exports = {
  User,
};
