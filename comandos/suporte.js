const Discord = require("discord.js")

module.exports = {

  run: async (client, message, args) => {

    let bicon = client.user.displayAvatarURL();
    var embed = new Discord.MessageEmbed()

    .setTitle("Precisa de ajuda ou apenas quer um lugar pra conversar?")
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(bicon)
    .setDescription("O Servidor da Laya é o lugar perfeito uhuuuuu")
    .addField("** **", "[**Clique Aqui**](https://discord.com/invite/v4RGnVgRw2)")
    .setFooter(`Comando Solicitado por: ${message.author.tag}`)

    message.channel.send(embed)
  
  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **suporte** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
}	
}