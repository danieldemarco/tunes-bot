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
  tableName: "User"
});


module.exports = {
  User
};
