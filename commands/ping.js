const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

/**
 * @param {ChatInputCommandInteraction} interaction
 */
const execute = async (interaction) => {
  await interaction.reply("Pong!");
};

module.exports = {
  data,
  execute,
};
