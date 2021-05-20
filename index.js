const http = require('http');
require('dotenv').config()
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sdfgsdgsdf.bvzxcmk.repl.co`);
}, 3*60*1000);

//separação

const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require('fs');
const client = new Discord.Client()
const config = require("./config.json");
const Topgg = require("@top-gg/sdk");
const token = process.env.TOKEN_DISCORD;

client.config = config;

client.on('guildCreate', guild => {
  client.guilds.cache.get("822439547681243207").channels.cache.get("830653412235935765").setName(`🎰 • ${client.guilds.cache.size} Servidores`);
  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("Fui adicionada em +1 servidor chamado: **" + guild.name + "**")

});

client.on('guildDelete', guild => {
  client.guilds.cache.get("822439547681243207").channels.cache.get("830653412235935765").setName(`🎰 • ${client.guilds.cache.size} Servidores`)
  client.guilds.cache.get("822439547681243207").channels.cache.get("828450775054286889").send("Fui removida de 1 servidor chamado: **" + guild.name + "**")
})


fs.readdir("./events/", (err, files) => {

  if (err) return console.error(err);

  files.forEach(file => {

    const event = require(`./events/${file}`);

    let eventName = file.split(".")[0];

    client.on(eventName, event.bind(null, client));

  });

});

client.commands = new Enmap();

fs.readdir("./comandos/", (err, files) => {

  if (err) return console.error(err);

  files.forEach(file => {

    if (!file.endsWith(".js")) return;

    let props = require(`./comandos/${file}`);

    let commandName = file.split(".")[0];

    console.log(`Carregando ${commandName}`);

    client.commands.set(commandName, props);

  });

});


const api = new Topgg.Api(process.env.API)

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size
  })
}, 1800000)


const webhook = new Topgg.Webhook("XLIVE281");

app.post("/dblwebhook", webhook.middleware(), (req, res) => {
  
  console.log(req.vote.user); 
  client.guilds.cache.get("822439547681243207").channels.cache.get("826778924641157141").send("Obrigada <@" + req.vote.user + "> por votar em mim")
});

app.listen(5000);


  
client.login(token);
