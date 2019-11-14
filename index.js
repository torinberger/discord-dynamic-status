
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

var line = process.env["LINE1"]
var i = 1;

client.on('ready', () => {
  setInterval(function () {
    console.log('set');
    i = (i+1) % 6
    line = process.env["LINE"+i]
    client.user.setActivity(line)
  }, 1000*10);
})

client.login(process.env.TOKEN)
