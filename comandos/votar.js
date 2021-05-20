const Discord = require("discord.js")

module.exports = {

  run: async (client, message, args) => {

    let bicon = client.user.displayAvatarURL();

    var embed = new Discord.MessageEmbed()

    .setTitle("Quer votar na Laya?")
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(bicon)
    .setDescription("Laya é um bot 100% gratuito, então, como não temos nenhuma fonte de renda, pedimos apenas o seu voto no top.gg (Site de botlist). \n Isso já ajuda muito, é sério")
    .addField("** **", "[**Vote aqui**](https://top.gg/bot/802349863434059786/vote)")
    .setFooter(`Comando Solicitado por: ${message.author.tag}`)

    message.channel.send(embed)
  
  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **votar** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
}	
}