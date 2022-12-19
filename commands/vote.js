/**
 * Admin commands for starting and ending the voting phase
 */
const {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandGroupBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
  userMention,
  bold,
} = require("discord.js");

const COMMANDS = {
  VOTE: "vote",
  OPEN: "open",
  CLOSE: "close",
};

const command = new SlashCommandBuilder();
const subcommands = new SlashCommandSubcommandGroupBuilder();
const open = new SlashCommandSubcommandBuilder();
const close = new SlashCommandSubcommandBuilder();

open.setName("open").setDescription("open voting for the current round");

close.setName("close").setDescription("close voting for the current round");

subcommands.addSubcommand(open).addSubcommand(close);

const data = command
  .setName("vote")
  .setDescription("control the voting phase")
  .addSubcommand(open)
  .addSubcommand(close)
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild); // Limit to server Admins

/**
 * @param { ChatInputCommandInteraction } interaction
 */
const execute = async (interaction) => {
  // TODO: Handle voting open
  if (interaction.options.getSubcommand() === COMMANDS.OPEN) {
    await interaction.reply({
      content: `Voting has been ${bold("Started")} by ${userMention(
        interaction.user.id
      )}`,
    });
    return;
  }

  if (interaction.options.getSubcommand() === COMMANDS.CLOSE) {
    // TODO: Handle voting closed
    await interaction.reply({
      content: `Voting has been ${bold("Stopped")} by ${userMention(
        interaction.user.id
      )}`,
    });
    return;
  }

  interaction.reply({ content: "Something went wrong", ephemeral: true });
};

module.exports = {
  data,
  execute,
};
