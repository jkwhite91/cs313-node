const Discord = require("discord.js");
const token = "MzgxNjEzOTc0MDE1MTgwODEw.DPJtjA.sWMTTPKML6n1WffEvaMCuzMFoaQ"

const {Pool, Client } = require("pg");

// Creates a new instance module
const bot = new Discord.Client();


/******************* Setup DB connection ***********************************/
var pool = new Pool({
    host: "localhost",
    user: "Bob",
    password: "Jiafb914",
    database: "postgres",
    schema: "botserver"
});

var client = new Client({
  host: "localhost",
  user: "Bob",
  password: "Jiafb914",
  database: "postgres",
  schema: "botserver"
});
client.connect();

/*************************** End DB connection setup **************************/

//states that teh bot is ready and running
bot.on('ready', function() {
  console.log(`Logged in as ${bot.user.tag}!`);
});


// Adds the server to the database that the bot was just added to
bot.on("guildCreate", function(server){
  console.log("Trying to insert server " + server.name + " into database");
  
  var info = [server.name , server.id, server.ownerID, "&"];

  client.query("INSERT INTO botserver.server (servername, serverid, ownerid, prefix) VALUES ?", info , function(error, result) {
    if (error){
      console.log(error);
    }
  });
});

// Removes the sever from the list when the bot is kicked from the server
bot.on("guildDelete", function(server) {
  console.log("Attempting to remove " + server.name + " from the database.");
  client.query("DELETE * FROM botserver.server WHERE serverid = '" + server.id + "'", function(error) {
    if(error){
      console.log(error);
      return;
    }
    console.log("Server removed.")
  })
});

// Replys to a message with pong (example for now)
bot.on('message', function(msg) {
  // Makes sure the message is on the server and not in a private message to the bot
  if (!msg.channel.isPrivate) {
    if (msg.content === 'hello bot') {
      msg.reply("Hello you are on server **" + msg.guild.name + "**");
    }
  }

  if (msg.channel.isPrivate){
    if (msg.content === 'ping') {
      msg.reply("Hello you have sent me a **PM**");
    }
  }
});

// Greets new people as they join the server
bot.on("guildMember", function(member){
    const channel = member.guild.channels.find('name', 'member-log');
    if(!channel)
        return;
    channel.send("Welcome to the server, ${user.username}");
});

bot.login(token);