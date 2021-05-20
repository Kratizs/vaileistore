const Discord = require("discord.js")

module.exports = {

  run: async (client, message, args) => {
  
  const ms = await message.channel.send("Calculando...");

	const clientms = ms.createdTimestamp - message.createdTimestamp;
  
  ms.delete();

    var embed = new Discord.MessageEmbed()
    
    .setColor("#0040FF")
    .setDescription("💻 " + clientms + "ms")

    message.channel.send(embed)
  
  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **ping** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
}	
}