module.exports = {

  run: async (client, message, args) => {
      
const sayMessage = args.join(" ");
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))  return message.reply("Você precisa da permissão ``Administrador``");
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Preciso da permissão ``Gerenciar Mensagens``")
if (!args.join(" ")) return message.reply("Digite algo!");
    message.channel.send(sayMessage + "\n \n - Mensagem enviada por: **<@" + message.author.id + ">**");

client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("O usuário: **<@" + message.author.id + ">** executou o comando **falar** \nServer: **" + message.guild.name + "** (" + message.guild.id + ") \nFrase: **" + sayMessage + "** \nNome do chat: **#" + message.channel.name + "**(" + message.channel.id + ")")

}
};