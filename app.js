const Discord = require('discord.js');
const bot = new Discord.Client();
const config= require ('./config.json')



bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  if(message.content.startsWith(`${prefix}embed`)){

    const embedname= new Discord.MessageEmbed()
    .setTitle(`I am an Embed`)
    .setDescription(message.content)
    .setColor(`ox#32ddff`)
    .setFooter(`REQUESTED BY ${message.author.tag}`,$(message.author.displayAvatarURL({dynamic : true)))
    }
  if (message.content === `${config.prefix}ping`) {
    message.reply('pong');
  }
  if (message.content === `${config.prefix}av`) {
    message .channel.send(message.author.displayAvatarURL({dynamic : true}))
  }
  



  //message.author.displayAvatarURL())
});

bot.login(config.token);
