const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./config.json");

client.on("ready", () {
 console.log("I am ready!");
});

client.on("message", (message)  {
 if (!message.content.startsWith(prefix) || message.author.bot) return;
 if (message.content.startsWith(prefix + "ping")) {
  message.channel.send("pong!");
} else
if (message.content.startsWith(prefix + "foo")) {
 message.channel.send("bar!");
 }
);
 
client.login(token);
