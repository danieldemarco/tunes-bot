// env config
require('dotenv').config({ path: './.env' });
const path = require('node:path');
const fs = require('node:fs');
const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} = require('discord.js');

// environmental configuation
const ENV = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  botToken: process.env.BOT_TOKEN,
  botScopes: process.env.BOT_PERMISSION_SCOPES,
  guildID: process.env.GUILD_ID,
};

// setup
const client = new Client({
  intents: GatewayIntentBits.Guilds,
});

// Add slash command handlers to client
addCommandsToClient(client);

// Register slack commands to server using REST api
registerCommands();

console.log(client.commands);
// handlers
client.once(Events.ClientReady, (c) => {
  console.log(`Client Ready`);
  console.log(`Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

// start up
client.login(ENV.botToken).catch((err) => console.error(err));

// utils
//TODO: These are gross and they need to be abstracted out

function addCommandsToClient(client) {
  client.commands = new Collection();
  const commandsPath = path.join(__dirname, 'commands');
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
  }
}

function registerCommands() {
  const commands = [];

  const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(command.data.toJSON());
    commands.push(command.data.toJSON());
  }

  const rest = new REST({ version: '10' }).setToken(ENV.botToken);

  (async () => {
    try {
      console.log(
        `Started refreshing ${commands.length} application (/) commands.`
      );

      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationGuildCommands(ENV.clientID, ENV.guildID),
        { body: commands }
      );

      console.log(
        `Successfully reloaded ${data.length} application (/) commands.`
      );
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error('FAILED TO REGISTER/RELOAD SLASH COMMANDS WITH GUILD');
      console.error(error);
    }
  })();
}