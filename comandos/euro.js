const Discord = require("discord.js");
const fs = require('fs');

module.exports = {

  run: async (client, message, args) => {

    var request = require("request");
    var url = "https://economia.awesomeapi.com.br/json/all/EUR-BRL";

    request(url,async function (err, response, body) {
      if (err) {
        console.log(err);
      }
      body = JSON.parse(body);
      var pegarvalor = body.EUR.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotoeuro = "https://images.vexels.com/media/users/3/130199/isolated/preview/68a438060e0dba26de4ff4745f44a144-iacute-cone-de-moeda-euro-plana-by-vexels.png"
  
      //Embeds

    var euro = "Euro 😔"
    var chard = "📈"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(euro)
    .setColor(cor)
    .setThumbnail(fotoeuro)
    .setTimestamp()
    .setDescription(`${chard} | €1,00 = R$${valorfinal}`)

    message.channel.send(embed)

    client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **euro** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
})}};