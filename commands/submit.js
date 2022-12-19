/**
 * Handler for users submitting their songs for each rouch
 */
const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");
const validateSpotifyURI = require("../spotify/index");

const data = new SlashCommandBuilder()
  .setName("submit")
  .setDescription("submit")
  .addSubcommand((input) =>
    input
      .setName("song")
      .setDescription("submit a song for this round")
      .addStringOption((option) =>
        option
          .setName("uri")
          .setDescription("Spotify URI of the song you would like to submit")
      )
  );

/**
 * @param {ChatInputCommandInteraction} interaction
 */
const execute = async (interaction) => {
  if (interaction.options.getSubcommand() === "song") {
    // Check if the user has already submitted for this round
    const { username, id } = interaction.user;
    // TODO: Check this round in DB for make sure an entry doesn't exist
    /**
     * !PSEUDO
     * const resp = DB.getRound(currentRound).getSubmission(username, userid) //something like this
     * if resp.length != 0 {
     *  interation.reply({content: "You have already voted this round", ephemeral: true})
     * }
     * return
     */

    const song = interaction.options.getString("uri");
    // Verify something was submitted
    if (!song) {
      await interaction.reply({
        content: " You must provide a song url",
        ephemeral: true,
      });
      return;
    }

    // Validate uri is a real spotify song
    const [valid, err] = await validateSpotifyURI(song);
    if (err || !valid) {
      await interaction.reply("Song URL invalid", { ephemeral: true });
      return;
    }

    // TODO: Store song submission
    await interaction.reply(`Submission Recieved!!`);
  }
};

module.exports = {
  data,
  execute,
};
