const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('submit')
  .setDescription('submit')
  .addSubcommand((input) => {
    return input
      .setName('song')
      .setDescription('submit a song for this round')
      .addStringOption((option) => {
        return option
          .setName('uri')
          .setDescription('Spotify URI of the song you would like to submit');
      });
  });

/**
 * @param {ChatInputCommandInteraction} interaction
 */
const execute = async (interaction) => {
  if (interaction.options.getSubcommand() === 'song') {
    const song = interaction.options.getString('uri');

    if (song) {
      await interaction.reply(`Recieved Song URI ${song}`);
      return;
    }

    await interaction.reply({
      content: ' You must provide a song url',
      ephemeral: true,
    });
  }
};

module.exports = {
  data,
  execute,
};
