/**
 * Handler for creating the tournament matchups
 */

const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

const data = new SlashCommandBuilder()
.setName("matchup")
.setDescription("Prints the matchups for the given round to the #VoteNow channel")
.addSubcommand((input) =>
    input
      .setName("round")
      .setDescription("Create a matchup for the current round")
);

/**
 * @param {ChatInputCommandInteraction} interaction
 */
const execute = async (interaction) => {
  /**
   * !PSEUDO
   * 
   * // Get all songs from parameter round
   * const currentRound = interaction.options.getSubcommand()
   * db get songs from (currentRound) (store as 2D array)
   *  ex: [[song1Name, song1Artist, song1URI],[song2Name, song2Artist, song2URI], ...]
   * Use random-helper to generate strings for voting
   * TODO: Ask Dan how to smush these different pieces together in an efficient way
   * 
   */
}

module.exports = {
  data,
  execute,
};
