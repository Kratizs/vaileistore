const Discord = require("discord.js");
const fs = require('fs');

module.exports = (client, message,roles) => {

  if (message.author.bot) return;
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: client.config.prefix
        };
    }

if (/^<@!?802349863434059786>$/.test(message.content)) {

  let bicon = client.user.displayAvatarURL();
  var embed = new Discord.MessageEmbed()

    .setTitle("Laya Info")
    .setThumbnail(bicon)
    .setColor("#0040FF")
    .setDescription("Oi, meu nome é Laya, um bot focado na economia mundial. \nMeu prefixo padrão é ``-``")

    message.channel.send(embed)

    client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** mencionou a Laya \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
}

 
    let prefix = prefixes[message.guild.id].prefixes;
  
  if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
 
    let arquivocmd = client.commands.get(command.slice(prefix.length));
    if(arquivocmd) arquivocmd.run(client,message,args);
};