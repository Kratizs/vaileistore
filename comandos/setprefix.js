const Discord = require("discord.js");
const fs = require("fs");
 
module.exports = {

  run: async (client, message, args) => {
 
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão ``ADMINISTRADOR``");
  if(!args[0]) return message.reply("Para trocar meu prefix digite: setprefix (Novo Prefix)");
  
 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
 
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
 
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
 
  let Embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("❄️ Prefix setado")
  .setDescription(`Agora o prefix é: ${args[0]}`);
 
  message.channel.send(Embed);
 
 client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **setprefix** \nServer: **" + message.guild.name + "**(" + message.guild.id + ") \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ") \nO novo prefixo é: **" + args[0] + "**")
}
};