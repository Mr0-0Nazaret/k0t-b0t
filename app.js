const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';
bot.commands = new Discord.Collection();
const fs = require('fs');

client.on('message', (message) => {
 console.log(`Запустился бот ${bot.user.username}`);
 bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
   console.log(link);
 }) }
});

client.on('message', msg => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  let user = message.author.username;
  let userid = message.author.username;
  let messageArray = message.content.split(" ")
  let command = messageArray[0].toLoserCase();
  let args = messageArray.slice(1);
  if(message.content.startWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run (bot,message,arg);
}

client.on('message', msg => {
 if (message.contenе.startWith(prefix + 'ping')){
   message.channel.send(client.ping)
   return 0
 }
})

client.login('NTIxNzQ5NzMzOTUwMzU3NTA0.DxgFaw.fkvD0j_kIbavrxBbWk9diHiMFlY');
