/**
 * Admin commands for starting and ending the voting phase
 */
const {
  SlashCommandBuilder,
  SlashCommandSubcommandBuilder,
  SlashCommandSubcommandGroupBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
} = require('discord.js');

const COMMANDS = {
  VOTE: 'vote',
  OPEN: 'open',
  CLOSE: 'close',
};

const command = new SlashCommandBuilder();
const subcommands = new SlashCommandSubcommandGroupBuilder();
const open = new SlashCommandSubcommandBuilder();
const close = new SlashCommandSubcommandBuilder();

open.setName(COMMANDS.OPEN).setDescription('open voting for the current round')

close
  .setName(COMMANDS.CLOSE)
  .setDescription('close voting for the current round');

subcommands.addSubcommand(open).addSubcommand(close);

command
  .setName('vote')
  .setDescription('control the voting phase')
  .addSubcommandGroup(subcommands)
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild); //Limit to server Admins

/**
 * @param { ChatInputCommandInteraction } interaction
 */
const execute = async (interaction) => {
  if (interaction.options.getSubcommand() === COMMANDS.OPEN) {
    // TODO: Handle voting open
    return 
  }

  if (interaction.options.getSubcommand() === COMMANDS.CLOSE) {
    //TODO: Handle voting closed
    return 
  }

  interaction.reply({ content: 'Something went wrong', ephemeral: true } 
};
