const Discord = require("discord.js");
const fs = require('fs');

module.exports = {

  run: async (client, message, args) => {

    var request = require("request");
    var url = "https://economia.awesomeapi.com.br/json/all/USD-BRL";

    request(url,async function (err, response, body) {
      if (err) {
        console.log(err);
      }
      body = JSON.parse(body);
      var pegarvalor = body.USD.ask;
      var valor = pegarvalor.substr(0, 4);
      var valorfinal = valor.replace(".", ",");

      //Fotos das moedas
  
      var fotodolar = "https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg"
  
      //Embeds

    var dolar = "Dólar 😔"
    var chard = "📈"
    var cor = "#008000"
    const embed = new Discord.MessageEmbed()
    .setTitle(dolar)
    .setColor(cor)
    .setThumbnail(fotodolar)
    .setTimestamp()
    .setDescription(`${chard} | $1,00 = R$${valorfinal}`)

    message.channel.send(embed)

    client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **dólar** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
})}};