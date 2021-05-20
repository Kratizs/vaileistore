const Discord = require("discord.js");
const fs = require('fs');

module.exports = {

  run: async (client, message, args) => {

if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))  return message.reply("Você precisa da permissão ``Gerenciar Canais``"); 

var chat = message.mentions.channels.first();
if(!chat) return message.reply("Mencione um canal")
var canal = `client.guilds.cache.get('${message.guild.id}').channels.cache.get('${chat.id}')`;
var chatfinal = eval(canal);
var data = 'a';

if(typeof chatfinal === 'undefined') {
	message.channel.send("Opa, não consegui encontrar este canal")
} else {
	fs.unlink("./verify2/"+canal, (err) => {
    if (err) {
    return console.log(err);
    message.channel.send("Deu erro com alguma coisa :/");
  };
    console.log('1 Channel foi deletado');
    message.channel.send("Opa, não irei mais avisar ali quando o euro sofrer alguma mudança")

    const database = './verify2/';
  fs.readdir(database, (err, files) => {
    client.guilds.cache.get("822439547681243207").channels.cache.get("830653949932470283").setName(`🎰 • ${files.length} Canais Euro`)
  })

  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** Removeu 1 canal de euro \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")

})
}
}};