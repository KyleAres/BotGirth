const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });
const { token, prefix } = require("./config.json");

client.on("ready", () => console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`));
 // Example of changing the bot's playing game to something useful. `client.user` is what the
 // docs refer to as the "ClientUser".
client.user.setActivity(`Serving ${client.guilds.size} servers`);



client.on("message", m => {
 // This event will run on every single message received, from any channel or DM.
 
 // It's good practice to ignore other bots. This also makes your bot ignore itself
 // and not get into a spam loop (we call that "botception").
 if(message.author.bot) return;
 
 // Also good practice to ignore any message that does not start with our prefix, 
 // which is set in the configuration file.
 if(message.content.indexOf(prefix) !== 0) return;
 
 // Here we separate our "command" name, and our "arguments" for the command. 
 // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
 // command = say
 // args = ["Is", "this", "the", "real", "life?"]
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

 /*if (!message.content.startsWith(prefix) || message.author.bot) return;
 if (message.content.startsWith(prefix + "ping")) {
  message.channel.send("pong!");*/
}

if (message.content.startsWith(prefix + "foo")) {
 message.channel.send("bar!");
 }
 
client.login(token);