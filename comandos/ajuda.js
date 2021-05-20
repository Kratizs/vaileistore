const Discord = require("discord.js");
const fs = require('fs');
const moment = require("moment");
require("moment-duration-format");

module.exports = {

  run: async (client, message, args) => {
  
  const database = './verify/';
  fs.readdir(database, (err, files) => {

  const database2 = './verify2/';
  fs.readdir(database2, (err, files2) => {

  let duration = moment.duration(client.uptime).format('D [Dias], H [Horas], m [Minutos], s [Segundos]');

  let bicon = client.user.displayAvatarURL();
  const embed = new Discord.MessageEmbed()
  .setTitle("ℹ️ Ajuda")
  .setDescription("Laya é um bot brasileiro que informa usuários sempre que há alteração no dólar e no euro, sendo pratíco e fácil de usar")
  .setColor("RANDOM")
  .setTimestamp()
  .setThumbnail(bicon)
  .addField("😀 Lista de comandos", "**adddolar** | Adiciona um canal na lista de notificações do dólar \n **removerdolar** | Remove um canal da lista de notificações do dólar \n **addeuro** | Adiciona um canal na lista de notificações do euro \n **removereuro** | Remove um canal da lista de notificações do euro \n **ajuda** | Lista comandos do bot \n **dolar** | Mostra o dólar \n **euro** | Mostra o euro \n **setprefix** | Muda o prefixo do bot no servidor \n **falar** | Manda o bot falar alguma frase \n **ping** | Mostra a latência do bot \n **votar** | Manda o link para votar em mim \n **suporte** | Envia o link do meu servidor de suporte")
  .addField("🏆 Contador:", `Servidores: **${client.guilds.cache.size}** \n Canais sendo notificados (Dólar): **`+ files.length + `** \n Canais sendo notificados (Euro): **`+ files2.length + `**`, true)
  .addField("🖥️ Tempo online", `**${duration}**`,true )
  .addField("🌍 Links",'- [**ADICIONE-ME**](https://discord.com/oauth2/authorize?client_id=802349863434059786&scope=bot&permissions=536879160) \n - [**VOTE EM MIM**](https://top.gg/bot/802349863434059786/vote) \n - [**SUPORTE**](https://discord.com/invite/v4RGnVgRw2) \n - [**TWITTER**](https://twitter.com/vaileii)',)
  .setFooter(`Comando solicitado por: ${message.author.tag}`)


message.channel.send(embed);

client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **ajuda** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")
})
})
}
};