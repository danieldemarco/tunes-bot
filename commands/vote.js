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
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
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
    // const collector = interaction.channel.createMessageComponentCollector({
    //   time: 4000,
    // });

    // collector.on("collect", (interaction) => {
    //   if (!interaction.isButton()) return;

    //   console.log(`Got Message from collector ${interaction.customId}`);
    // });

    // collector.on("end", (interaction) => {
    //   interaction.forEach((i) => console.log(i));
    // });

    await interaction.channel.send({
      content: "Pick Your Winner",
      components: [
        new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("song-1")
              .setStyle(ButtonStyle.Primary)
              .setLabel("Song 1")
          )
          .addComponents(
            new ButtonBuilder()
              .setCustomId("song-2")
              .setStyle(ButtonStyle.Primary)
              .setLabel("Song 2")
          ),
      ],
    });
  }

  if (interaction.options.getSubcommand() === COMMANDS.CLOSE) {
    // TODO: Handle voting closed
    await interaction.reply({
      content: `Voting has been ${bold("Stopped")} by ${userMention(
        interaction.user.id
      )}`,
    });
  }
};

module.exports = {
  data,
  execute,
};
