/**
 * Sends a direct message to players who have yet 
 * to submit a song for the current round
 */

const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

const data = new SlashCommandBuilder()
  .setName("remind")
  .setDescription("Remind those lazy procrastinators!");

/**
 * @param {ChatInputCommandInteraction} interaction
 */
const execute = async (interaction) => {
  await interaction.reply("THIS COMMAND IS UNFINISHED");

  /**
   * Check DB for null values in current round
   * TODO check if this function should take a round number as a parameter (it probably should)
   * 
   * Send private messages to each player that is missing a song
   * TODO learn how to do that :)
   */
}

module.exports = {
  data,
  execute,
};