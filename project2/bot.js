const Discord = require("discord.js");
const token = "MzgxNjEzOTc0MDE1MTgwODEw.DPJtjA.sWMTTPKML6n1WffEvaMCuzMFoaQ"

// Creates a new instance module
const client = new Discord.Client();

//states that teh bot is ready and running
client.on('ready', function() {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Replys to a message with pong (example for now)
client.on('message', function(msg) {
  if (msg.content === 'ping') {
    msg.reply("Hello Pong!");
  }
});

// Greets new people as they join the server
client.on("guildMember", function(member){
    const channel = member.guld.channels.find('name', 'member-log');
    if(!channel)
        return;
    channel.send("Welcome to the server, ${user.username}");
});

client.login(token);